// React - imports:
import { useEffect, useState } from 'react';

// Ant designe - Form import:
import type { SelectProps } from 'antd';
import { Slider, Select } from 'antd';

// Application - Components import:
import RouteCardComponent from '../../components/Objects/Routes/RouteCardComponent';

// Application - Icons import:
import DisplayTableIcon from '../../assets/icons/interface/DisplayTableIcon';
import DisplayCardIcon from '../../assets/icons/interface/DisplayCardIcon';
import EmptyResponse from '../../assets/icons/interface/EmptyResponseIcon';
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
  
  // Constance values:
  const [routes, setRoutes] = useState<Routes[]>([]);
  const [filteredRoutes, setFilteredRoutes] = useState<Routes[]>([]);
  const [distanceFilter, setDistanceFilter] = useState<[number, number]>([0, 100]);
  const [durationFilter, setDurationFilter] = useState<[number, number]>([0, 24]);
  const [elevationFilter, setElevationFilter] = useState<[number, number]>([0, 3000]);
  const [routeTypeFilter, setRouteTypeFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Collect routes from json file:
  useEffect(() => {
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

  // Filters - Slider:
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  // Update the filtered routes whenever filters change
  useEffect(() => {
    const filtered = routes.filter((route) => {
      return (
        route.distance >= distanceFilter[0] &&
        route.distance <= distanceFilter[1] &&
        route.duration >= durationFilter[0] &&
        route.duration <= durationFilter[1] &&
        route.elevation_gain >= elevationFilter[0] &&
        route.elevation_gain <= elevationFilter[1] &&
        (routeTypeFilter ? route.type === routeTypeFilter : true)
      );
    });
    setFilteredRoutes(filtered);
  }, [routes, distanceFilter, durationFilter, elevationFilter, routeTypeFilter]);

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
              <div className="card-search-icon" onClick={toggleFilters}><FiltersIcon></FiltersIcon></div>
            </div>
        </article>

        <article className={`card card-filters card-padding ${showFilters ? '' : 'non-display'}`}>
            <div className="card-section card-filter">
                <div className="card-filter-slider">
                    <label>Distance (Km):</label>
                    <Slider
                      min={0}
                      max={100}
                      step={5}
                      range
                      defaultValue={[0, 100]}
                      onChange={(value) => setDistanceFilter(value)}
                    />
                </div>
                <div className="card-filter-slider">
                    <label>Duration (h):</label>
                    <Slider
                      min={0}
                      max={24}
                      step={1}
                      range defaultValue={[0, 24]}
                      onChange={(value) => setDurationFilter(value)}
                    />
                </div>
                <div className="card-filter-slider">
                    <label>Gain Altitude (m):</label>
                    <Slider
                      min={0}
                      max={3000}
                      step={100}
                      range defaultValue={[0, 3000]}
                      onChange={(value) => setElevationFilter(value)}
                    />
                </div>
            </div>
            <div className="card-section card-filter">
              <div className="card-filter-slider">
                <label>Route type:</label>
                <Select
                  placeholder="Choose route type"
                  style={{ width: '100%' }}
                  options={[
                    { label: 'Hiking', value: 'hiking' },
                    { label: 'Biking', value: 'biking' },
                    { label: 'Running', value: 'running' },
                  ]}
                  onChange={(value) => setRouteTypeFilter(value || null)}
                  allowClear
                />
              </div>
            </div>
        </article>
      </section>

      <section className="card-container-grid grid-mediun">
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route) => (
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
        ))
      ) : (
        <EmptyResponse />
      )}
      </section>
    </>
  );
};
