// React import:
import { Link } from "react-router-dom";

// Main Home page:
export default function GenericErrorPage() {
  return (
    <>
      <p>Generic Error 500</p>
      <Link to="/">Back</Link>
    </>
  );
}
