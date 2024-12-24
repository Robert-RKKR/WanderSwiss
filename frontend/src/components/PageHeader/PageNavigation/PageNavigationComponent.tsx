// React - base import:
import { Link } from 'react-router-dom';

// Application - CSS imports:
import "./PageNavigationStyle.css";

// Main page navigation:
export default function PageNavigationComponent() {
  return (
    <nav className="page-header-nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/routes">Routes</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/knowledge-base">Knowledge Base</Link>
            </li>
        </ul>
    </nav>
  );
}
