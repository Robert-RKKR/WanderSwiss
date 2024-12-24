// React import:
import { Link, useNavigate } from "react-router-dom";

// Main Home page:
export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      <p>Page not found 404</p>
      <button onClick={handleGoBack}>Go Back</button>
      <button><Link to="/">Go Home</Link></button>
    </>
  );
}
