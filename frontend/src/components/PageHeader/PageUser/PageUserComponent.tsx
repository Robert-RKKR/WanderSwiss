// React - base import:
import { Link } from 'react-router-dom';

// Application - Icon imports:
import AvatarIcon1 from '../../../assets/avatars/AvatarIcon1'

// Application - CSS imports:
import "./PageUserStyle.css";

// Main page navigation:
export default function PageUserComponent() {
  return (
    <div className="page-header-user">
        <a href="http://127.0.0.1:5500/wanderswiss2/user_profile.html" aria-label="User Profile">
            <Link to="/user-profile"><AvatarIcon1></AvatarIcon1></Link>
        </a>
    </div>
  );
}
