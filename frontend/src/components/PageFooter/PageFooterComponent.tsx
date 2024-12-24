// React - base import:
import { Link } from 'react-router-dom';

// Application - Components import:
import { ApplicationVersion } from '../Applicaion/ApplicationVersion/ApplicationVersion'

// Application - CSS imports:
import "./PageFooterStyle.css";

// Component:
export default function PageFooterComponent() {
  return (
    <footer className="page-footer">

        <div className="page-footer-section">

            <div className="page-footer-wanderswiss">
                <p>&copy; 2025 WanderSwiss. All rights reserved. <q>Version: {ApplicationVersion}</q></p>
            </div>

        </div>

        <div className="page-footer-section">

            <div className="page-footer-pagelinks">
                <ul className="page-pagelinks-section">
                    <li className="page-pagelinks-title">About</li>
                    <li className="page-pagelinks-link">
                        <Link to="/about_wwanderswiss">About WanderSwiss</Link>
                    </li>
                    <li className="page-pagelinks-link">
                        <Link to="/about_me">About Me</Link>
                    </li>
                </ul>
                <ul className="page-pagelinks-section">
                    <li className="page-pagelinks-title">Contact</li>
                    <li className="page-pagelinks-link">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="page-pagelinks-section">
                    <li className="page-pagelinks-title">Videos</li>
                    <li className="page-pagelinks-link">
                        <Link to="/videos">Videos</Link>
                    </li>
                </ul>
                <ul className="page-pagelinks-section">
                    <li className="page-pagelinks-title">Social Media</li>
                    <li className="page-pagelinks-link">
                        <a href="#">Instagram</a>
                    </li>
                    <li className="page-pagelinks-link">
                        <a href="#">Facebook</a>
                    </li>
                    <li className="page-pagelinks-link">
                        <a href="#">YouTube</a>
                    </li>
                </ul>
            </div>

        </div>

    </footer>
  );
}