// React - import:
import { Outlet } from 'react-router-dom';
import React from 'react';

// Application - Components import:
import PageHeaderComponent from './components/PageHeader/PageHeaderComponent'
import PageFooterComponent from './components/PageFooter/PageFooterComponent'

const App: React.FC = () => {
  return (
    <div className="page">
      {/* Main Page Header Component */}
      <PageHeaderComponent></PageHeaderComponent>

      {/* Main Page Body Component - Route Content */}
      <main className="page-body">
        <Outlet />
      </main>

      {/* Main Page Footer Component */}
      <PageFooterComponent></PageFooterComponent>
    </div>
  );
};

export default App;
