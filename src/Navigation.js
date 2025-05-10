import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/example">Example</Link> | 
      <Link to="/TodoApp">TodoApp</Link>
    </nav>
  );
}
export default Navigation;