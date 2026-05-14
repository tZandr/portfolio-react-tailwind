export default function Sidebar() {
  return (
    <ul className="flex justify-between gap-10">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}
