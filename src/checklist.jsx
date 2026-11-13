import { useState } from 'react';

  const Checklist = () => {
    const [items, setItems] = useState([
      { id: 1, text: 'Passport', checked: false },
      { id: 2, text: 'Travel insurance', checked: false },
      { id: 3, text: 'Flight tickets', checked: false },
      { id: 4, text: 'Hotel reservations', checked: false },
      { id: 5, text: 'Local currency', checked: false },
      { id: 6, text: 'Travel adapter', checked: false },
      { id: 7, text: 'Medications', checked: false },
      { id: 8, text: 'Toiletries', checked: false },
      { id: 9, text: 'Clothing', checked: false },
      { id: 10, text: 'Electronics', checked: false },
      { id: 11, text: 'Vaccinations', checked: false },
  
  ]);
  const checkedCount = items.filter((item) => item.checked).length;

const handleCheckboxCounter = (id) => {
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
  );
};

return (
  <section>
    <h1 className= "container-md list-unstyled text-center">Trip checklist</h1>
    <p className= "container-md list-unstyled text-center">{checkedCount} of {items.length} items completed</p>
    <ul className= "container-md list-unstyled text-center">
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxCounter(item.id)}
            />
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  </section>
);
};

export default Checklist;