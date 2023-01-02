import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/signup">Signup Page</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Login Page</Link>
    </nav>
  );
}