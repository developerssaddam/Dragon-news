import { Link } from "react-router-dom";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import { CiCalendar } from "react-icons/ci";

const SportsNews = () => {
  return (
    <div>
      <Link className="space-y-3 my-5">
        <img src={one} alt="" />
        <h2 className="text-lg font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-3 text-lg">
          <span className="font-semibold">Sports</span> <CiCalendar />{" "}
          <span>Jan 4, 2022</span>{" "}
        </h3>
      </Link>

      <Link className="space-y-3 my-5">
        <img src={two} alt="" />
        <h2 className="text-lg font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-3 text-lg">
          <span className="font-semibold">Sports</span> <CiCalendar />{" "}
          <span>Jan 4, 2022</span>{" "}
        </h3>
      </Link>

      <Link className="space-y-3 my-5">
        <img src={three} alt="" />
        <h2 className="text-lg font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <h3 className="flex items-center gap-3 text-lg">
          <span className="font-semibold">Sports</span> <CiCalendar />{" "}
          <span>Jan 4, 2022</span>{" "}
        </h3>
      </Link>
    </div>
  );
};

export default SportsNews;
