import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <div className="Logo">
                <h1>ExplodingCine</h1>
            </div>

            <div>
                <NavLink to='/'>Movies</NavLink>
                <NavLink to='/forum'>Forum</NavLink>
            </div>
        </nav>
    );
}

export default Navbar