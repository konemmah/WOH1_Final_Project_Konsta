import 'dotenv/config';
import express from 'express';
import { Duffel } from '@duffel/api';

const token = process.env.DUFFEL_API_KEY;

if (!token) {
  throw new Error('DUFFEL_API_KEY is missing from the root .env file.');
}

const duffel = new Duffel({ token });
const app = express();

app.use(express.json());

app.post('/api/search-flights', async (req, res) => {
  const { origin, destination, date, returnDate, passengers } = req.body;
  const passengerCount = Number(passengers);

  if (
    typeof origin !== 'string' ||
    typeof destination !== 'string' ||
    typeof date !== 'string' ||
    !origin.trim() ||
    !destination.trim() ||
    !date ||
    !Number.isInteger(passengerCount) ||
    passengerCount < 1 ||
    passengerCount > 9
  ) {
    return res.status(400).json({ message: 'Please provide valid search details.' });
  }

  const departureAirport = origin.trim().toUpperCase();
  const arrivalAirport = destination.trim().toUpperCase();
  const slices = [
    {
      origin: departureAirport,
      destination: arrivalAirport,
      departure_date: date,
    },
  ];

  if (typeof returnDate === 'string' && returnDate) {
    slices.push({
      origin: arrivalAirport,
      destination: departureAirport,
      departure_date: returnDate,
    });
  }

  try {
    const { data } = await duffel.offerRequests.create({
      slices,
      passengers: Array.from({ length: passengerCount }, () => ({ type: 'adult' })),
      cabin_class: 'economy',
      return_offers: true,
    });

    res.json({ data: data.offers ?? [] });
  } catch (error) {
    console.error('Duffel flight search failed:', error);
    res.status(502).json({ message: 'The flight provider search failed.' });
  }
});

app.listen(3001, () => {
  console.log('Flight search API listening on http://localhost:3001');
});
