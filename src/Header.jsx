import { Link } from 'react-router-dom'



function Header() {
    return (
        <header>
            <h1>Flight App</h1>
            <nav className= "navbar bg-dark navbar-dark">
                <ul className= "container-md" className= "list-unstyled">
                    <li><Link to="/Search">Flights</Link></li>
                    <li><Link to="/Checklist">Checklist</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                </ul>
            </nav>
            <hr/>
        </header>
        
    )

}

export default Header