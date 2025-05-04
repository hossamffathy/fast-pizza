import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import Query from "./Query"
export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-yellow-400 p-4">
      <Link to="/">
        <h2>FAST REACT PIZZA CO.</h2>
      </Link>

     <Query/>
      <Username />
    </nav>
  );
}
