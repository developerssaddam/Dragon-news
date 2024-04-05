import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-5 bg-[#F3F3F3] p-1 md:p-3 my-5">
      <button className="btn btn-secondary">Latest News</button>
      <Marquee pauseOnHover={true}>
        <Link to="#" className="mr-12">
          I can be a React component, multiple React components
        </Link>

        <Link to="#" className="mr-12">
          I can be a React component, multiple React components
        </Link>

        <Link to="#" className="mr-12">
          I can be a React component, multiple React components
        </Link>

        <Link to="#" className="mr-12">
          I can be a React component, multiple React components
        </Link>

        <Link to="#" className="mr-12">
          I can be a React component, multiple React components
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
