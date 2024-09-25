import { Link } from "react-router-dom";
import notfoundIcon from "../assets/undraw_by_the_road.svg";

const NotFound = () => {
  return (
    <div className="flex  justify-center flex-col items-center my-11">
      <div className="w-[450px] mb-7">
        <img src={notfoundIcon} alt="not found" />
      </div>
      <h1 className="text-8xl text-primary">404</h1>
      <p className="text-4xl mb-4">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <button className="btn btn-primary">
        <Link to={"/"}>Back Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
