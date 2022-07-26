import MLB from './MLB'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Betting App</h1>
            <div className="links">
            <Link to="/" style={{
                    color: "white",
                    backgroundColor: "#1a81dc",
                    borderRadius: '8px'
                }}>Home</Link>
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "#1a81dc",
                    borderRadius: '8px'
                }}>NFL</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#1a81dc",
                    borderRadius: '8px'
                }}>NBA</Link>
                 <Link to="/MLB" style={{
                    color: "white",
                    backgroundColor: "#1a81dc",
                    borderRadius: '8px'
                }}>MLB</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
