import { Link } from "react-router-dom";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import { CiCalendar } from "react-icons/ci";

const SportsNews = () => {
  return (
    <div className="px-1">
      <Link className="space-y-3 mb-5">
        <img className="w-full" src={one} alt="" />
        <h2 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          <span className="lg:font-medium">Sports</span> <CiCalendar />{" "}
          <span>Jan 4, 2022</span>{" "}
        </h3>
      </Link>

      <Link className="space-y-3 mb-5">
        <img className="w-full" src={two} alt="" />
        <h2 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          <span className="lg:font-medium">Sports</span> <CiCalendar />
          <span>Jan 4, 2022</span>
        </h3>
      </Link>

      <Link className="space-y-3 mb-5">
        <img className="w-full" src={three} alt="" />
        <h2 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-1 lg:gap-3 lg:text-lg">
          <span className="lg:font-medium">Sports</span> <CiCalendar />{" "}
          <span>Jan 4, 2022</span>{" "}
        </h3>
      </Link>
    </div>
  );
};

export default SportsNews;
