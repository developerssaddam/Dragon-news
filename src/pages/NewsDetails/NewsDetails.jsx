import Header from "../../components/Header/Header";
import { FaArrowLeft } from "react-icons/fa";

import RightSideNav from "../../components/RightSideNav/RightSideNav";
import NavBar from "../../components/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import InsideNews from "../../components/InsideNews/InsideNews";

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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-5">
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
          <InsideNews />
        </div>
        <div className="sidebar p-4">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
