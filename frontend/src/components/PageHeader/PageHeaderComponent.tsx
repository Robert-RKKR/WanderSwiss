// Application - Components import:
import PageLogoComponent from '../PageHeader/PageLogo/PageLogoComponent'
import PageNavigationComponent from '../PageHeader/PageNavigation/PageNavigationComponent'
import PageUserComponent from '../PageHeader/PageUser/PageUserComponent'

// Application - CSS imports:
import "./PageHeaderStyle.css";

// Main page header:
export default function HeaderComponent() {
  return (
    <header className="page-header">

        <div className="page-header-section">

            <PageLogoComponent></PageLogoComponent>

        </div>

        <div className="page-header-section">

            <PageNavigationComponent></PageNavigationComponent>

            <PageUserComponent></PageUserComponent>

        </div>

    </header>
  );
}