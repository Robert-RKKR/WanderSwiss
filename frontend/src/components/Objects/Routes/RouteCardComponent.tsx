// React - imports:
import React, { useState } from 'react';

// Application - Icons import:
import StarEmptyIcon from '../../../assets/icons/interface/StarEmptyIcon';
import StarHalfIcon from '../../../assets/icons/interface/StarHalfIcon';
import StarIcon from '../../../assets/icons/interface/StarIcon';

import BikeRouteIcon from '../../../assets/icons/elements/routeTypes/BikeRouteIcon';
import HikeRouteIcon from '../../../assets/icons/elements/routeTypes/HikeRouteIcon';
import RunRouteIcon from '../../../assets/icons/elements/routeTypes/RunRouteIcon';


import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

// Application - CSS imports:
import "./RouteCardStyle.css";

interface Routes {
  routeId: string;
  name: string;
  duration: number;
  distance: number;
  elevationGain: number;
  startPoi: string;
  endPoi: string;
  routeScore: number;
  type: string;
  bestSeasons: string;
  image: string;
}

const RouteCardComponent: React.FC<Routes> = ({
  routeId,
  name,
  duration,
  distance,
  elevationGain,
  startPoi,
  endPoi,
  routeScore,
  type,
  bestSeasons,
  image,
  }) => {
    // Helper function to convert routeScore into stars:
    const renderStars = (score: number) => {
      const stars = [];
      const maxStars = 5;
      let remainingScore = score;

      for (let i = 0; i < maxStars; i++) {
        if (remainingScore >= 1) {
          stars.push(<StarIcon key={i} />);
          remainingScore -= 1;
        } else if (remainingScore >= 0.5) {
          stars.push(<StarHalfIcon key={i} />);
          remainingScore = 0;
        } else {
          stars.push(<StarEmptyIcon key={i} />);
        }
      }

      return stars;
    };

    // Image loading animation:
    const [isImageLoaded, setImageLoaded] = useState(false);

    // Conditional rendering of icons based on route type
    const renderRouteTypeIcon = (routeType: string) => {
      switch (routeType) {
        case 'biking':
          return <BikeRouteIcon />;
        case 'hiking':
          return <HikeRouteIcon />;
        case 'runing':
          return <RunRouteIcon />;
        default:
          return <BikeRouteIcon />; // Default icon if type is unknown
      }
    };

    return (
      <article className="card" key={routeId}>
        <header className="card-section card-header card-header-photo">
          <div className="card-header-icons-left">
            {renderRouteTypeIcon(type)} {/* Dynamically render the appropriate icon */}
          </div>
          <div className="card-header-icons-right card-header-icons-hidden">
              <svg className="card-header-icon" width="25" height="25" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="m15 1.28a2.811 2.811 0 0 1 1.24-.28h22.76a2.006 2.006 0 0 1 2 2v28.58l-5.79 23.42h-32.21a2.006 2.006 0 0 1 -2-2v-36.76a2.811 2.811 0 0 1 .28-1.24z" fill="#d7e5f4"/><circle cx="45" cy="45" fill="#3ac184" r="14"/><path d="m15 1.28v11.39a2.326 2.326 0 0 1 -2.33 2.33h-11.39a2.869 2.869 0 0 1 .6-.88l12.24-12.24a2.869 2.869 0 0 1 .88-.6z" fill="#9fbace"/><path d="m52 44h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill="#fff"/></svg>
              <svg className="card-header-icon" width="25" height="25" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="m59 13v42a4 4 0 0 1 -4 4h-50a4 4 0 0 1 -4-4v-42l1-1h56z" fill="#e1efff"/><path d="m59 9v4h-58v-4a4 4 0 0 1 4-4h50a4 4 0 0 1 4 4z" fill="#d14a7b"/><rect fill="#e1efff" height="8" rx="2" width="4" x="8" y="1"/><rect fill="#e1efff" height="8" rx="2" width="4" x="18" y="1"/><rect fill="#e1efff" height="8" rx="2" width="4" x="28" y="1"/><rect fill="#e1efff" height="8" rx="2" width="4" x="38" y="1"/><rect fill="#e1efff" height="8" rx="2" width="4" x="48" y="1"/><g fill="#bfdbf0"><rect height="8" rx="1" width="8" x="5" y="20"/><rect height="8" rx="1" width="8" x="19" y="20"/><rect height="8" rx="1" width="8" x="33" y="20"/><rect height="8" rx="1" width="8" x="47" y="20"/><rect height="8" rx="1" width="8" x="5" y="32"/><rect height="8" rx="1" width="8" x="19" y="32"/><rect height="8" rx="1" width="8" x="33" y="32"/><rect height="8" rx="1" width="8" x="47" y="32"/><rect height="8" rx="1" width="8" x="5" y="44"/><rect height="8" rx="1" width="8" x="19" y="44"/><rect height="8" rx="1" width="8" x="33" y="44"/><rect height="8" rx="1" width="8" x="47" y="44"/></g></svg>
          </div>
          <img
            src={image}
            className={`card-img-top ${isImageLoaded ? 'visible' : 'hidden'}`}
            alt="Card Header"
            onLoad={() => setImageLoaded(true)}
            style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
          />
          {!isImageLoaded && (
            <Flex align="center" gap="middle" className="card-img-top-loading">
              <Spin indicator={<LoadingOutlined spin />} size="large" />
            </Flex>
          )}
        </header>
        <div className="card-section card-body card-padding">
          <div className="card-body-section">
            <h2 className="card-body-title">{name}</h2>
            <ul className="card-body-list">
              <li key={duration}>
                <span>Duration</span> {duration}
              </li>
              <li key={distance}>
                <span>Distance</span> {distance}
              </li>
              <li key={elevationGain}>
                <span>Elevation gain</span> {elevationGain}
              </li>
              <li key={startPoi}>
                <span>Start point</span> {startPoi}
              </li>
              <li key={endPoi}>
                <span>End point</span> {endPoi}
              </li>
            </ul>
          </div>
        </div>
        <footer className="card-section card-footer card-padding">
          <div className="card-footer-section">
            <p>{type}</p>
            <p>{bestSeasons}</p>
          </div>
          <div className="card-footer-section">
            {renderStars(routeScore)}
          </div>
        </footer>
      </article>
    );
  };

export default RouteCardComponent;
