import "./Navbar.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            {/*<Link to="/">Home</Link>*/}
            {/*<Link to="/about">Sobre</Link>*/}

            {/* To change the class for current active link */}
            {/*<NavLink to="/" className={({ìsActive}) => (ìsActive? 'esta-ativo':'nao-ativo')}>Home</NavLink>*/}

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar