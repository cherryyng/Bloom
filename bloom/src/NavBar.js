import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">UW BLOOM</Link>
        </h1>

      <div className="links">
        <Link to="/">Login</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#5D3B63',
          borderRadius: '8px' 
        }}>New Review!</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;