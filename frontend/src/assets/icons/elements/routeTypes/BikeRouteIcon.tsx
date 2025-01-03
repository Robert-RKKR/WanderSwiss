import React from 'react';

const BikeRouteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg className="card-header-icon" width="25" height="25" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="m12 51a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12zm0-22a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10z" fill="#4f4f60"/><path d="m48 51a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12zm0-22a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10z" fill="#4f4f60"/><path d="m19.98 20.03-10.61 17.14a2.446 2.446 0 0 0 2.14 3.73l11.86-.25.33-3.91-9.7.26 7.74-11.92.26-3.08z" fill="#4ab591"/><path d="m40.44 16 9.41 21.55a2.053 2.053 0 0 1 .17.8 2 2 0 0 1 -3.83.8l-5.95-13.52-9.38 12.35-2.71-2.81.93-1.17 7.92-10h-12l-1.39-4h14.1l-1.11-2.607a1 1 0 0 1 .915-1.393z" fill="#4ab591"/><path d="m18.23 14.99 7.09 20.39.68 1.62 4-.001-.92-2.999-6.61-19-2.47-1z" fill="#389e79"/><g fill="#4f4f60"><circle cx="27" cy="39" r="4"/><path d="m26 12.792a2.21 2.21 0 0 1 -2.1 2.208h-5.52a2.436 2.436 0 0 1 -2.38-2.5 2.486 2.486 0 0 1 2.61-2.481l5.5.578a2.173 2.173 0 0 1 1.89 2.195z"/><path d="m48.5 22h-1.5a1 1 0 0 1 0-2h1.5a1.5 1.5 0 0 0 0-3h-11.5a1 1 0 0 1 0-2h11.5a3.5 3.5 0 0 1 0 7z"/></g>
        </svg>
    );
};

export default BikeRouteIcon;
