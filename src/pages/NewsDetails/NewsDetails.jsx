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

const NewsDetails = () => {
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
            <img
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
              className="w-full"
            />

            <h2 className="news_title text-lg font-bold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>

            <p>
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military aid for
              Kyiv as Ukraine marked its independence day six months after
              Russia invaded the country. The United States of America is
              committed to supporting the people of Ukraine as they continue the
              fight to defend their sovereignty. As part of that commitment, I
              am proud to announce our biggest tranche of security assistance to
              date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud
              Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
              Security, UK, Ukraine, United States, Worthy News (Worthy News) –
              U.S. President Joe Biden has announced nearly $3 billion in new
              U.S. military aid for Kyiv as Ukraine marked its independence day
              six months after Russia invaded the country. The United States of
              America is committed to supporting the people of Ukraine as they
              continue the fight to defend their sovereignty. As part of that
              commitment, I am proud to announce our biggest tranche of security
              assistance to date: approximately $2.
            </p>

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
