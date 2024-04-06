import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import NavBar from "../../components/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const currentNews = news.find((item) => item._id === id);
  const { title, details, image_url } = currentNews;

  return (
    <div>
      <Helmet>
        <title>Dragon news | News Details</title>
      </Helmet>
      <Header />
      <NavBar />

      <div className="grid grid-cols-4 gap-6 my-5">
        <div className="col-span-3">
          <h2 className="text-lg font-semibold mb-3">Dragon News</h2>
          <div className="space-y-4 p-8 border">
            <img src={image_url} alt="" className="w-full" />
            <h2 className="news_title text-lg font-bold">{title}</h2>
            <p>{details}</p>
            <button className="bg-[#F100B7] text-white px-4 py-3 font-bold rounded-md flex items-center gap-2">
              <FaArrowLeft /> All news in this category
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold my-8">Editors Insight</h2>

            <div className="flex gap-5">
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
          </div>
        </div>
        <div className="sidebar">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
