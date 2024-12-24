// React - imports:
import { useEffect, useState } from 'react';

// Application - Components import:
import RouteCardComponent from '../../components/Objects/Routes/RouteCardComponent';

// Application - Icons import:
import DisplayTableIcon from '../../assets/icons/interface/DisplayTableIcon';
import DisplayCardIcon from '../../assets/icons/interface/DisplayCardIcon';
import FiltersIcon from '../../assets/icons/interface/FiltersIcon';

// Application - CSS imports:
import "./RoutesStyle.css";


interface Routes {
  id: string;
  name: string;
  duration: number;
  distance: number;
  elevation_gain: number;
  start_poi: string;
  end_poi: string;
  route_score: number;
  type: string;
  best_seasons: string;
  image: string;
}

export default function RoutesList() {
  
  const [routes, setRoutes] = useState<Routes[]>([]);

  useEffect(() => {
    // Fetch the data when the component mounts:
    fetch('/routes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Routes[]) => {
        setRoutes(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <section className="card-container-grid grid-full">
        <article className="card card-search">
            <div className="card-section card-icons-left">
                <div className="card-search-icon"><DisplayTableIcon></DisplayTableIcon></div>
                <div className="card-search-icon"><DisplayCardIcon></DisplayCardIcon></div>
            </div>
            <div className="card-section card-input">
                <input type="text" placeholder="Name or region of route ..." aria-label="Search routes" />
                <button type="button" className="card-search-button">Search</button>
            </div>
            <div className="card-section card-icons-right">
              <div className="card-search-icon"><FiltersIcon></FiltersIcon></div>
            </div>
        </article>
      </section>

      <section className="card-container-grid grid-mediun">
        {routes.map((route) => (
          <RouteCardComponent
            key={route.id}
            routeId={route.id}
            name={route.name}
            duration={route.duration}
            distance={route.distance}
            elevationGain={route.elevation_gain}
            startPoi={route.start_poi}
            endPoi={route.end_poi}
            routeScore={route.route_score}
            type={route.type}
            bestSeasons={route.best_seasons}
            image={route.image}
          />
        ))}
      </section>
    </>
  );
};
