import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <h1>Welcome to my React App!</h1>
            <nav>
                <ul>
                    <li><Link to="/Search">Flights</Link></li>
                    <li><Link to="/Holidays">Holidays</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                </ul>
            </nav>
            <hr/>
        </header>
        
    )

}

export default Header