// React - base import:
import { Link } from 'react-router-dom';

// Application - Icon imports:
import Logo from '../../../assets/icons/logo/Logo'

// Application - CSS imports:
import "./PageLogoStyle.css";

// Main page navigation:
export default function PageLogoComponent() {
  return (
    <div className="page-header-logo">
        <Link to="/"><Logo></Logo></Link>
    </div>
  );
}
