import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Content = ({ data }) => {
  const { _id, title, details, image_url, author, rating, total_view } = data;
  return (
    <div>
      {/* news-item */}
      <div className="border p-5 rounded-md mb-8">
        <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
          <div className="flex items-center gap-3">
            <Link>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={author.img}
                alt=""
              />
            </Link>
            <div>
              <h2 className="font-semibold">{author.name}</h2>
              <p>{new Date(author.published_date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="text-xl">
              <CiBookmark />
            </button>
            <button className="text-xl">
              <CiShare2 />
            </button>
          </div>
        </div>

        <div className="details space-y-5 mt-5">
          <h2 className="font-semibold">{title}</h2>
          <img className="w-full max-h-[470px]" src={image_url} alt="" />
          <p className="border-b pb-5">
            {details.slice(0, 200)}
            {details.length > 200 ? (
              <Link to={`/news/${_id}`} className="ml-5 text-[#FF8C47]">
                Read More
              </Link>
            ) : (
              details
            )}
          </p>

          <div className="flex justify-between">
            <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-[#706F6F]">{rating.number}</span>
            </h2>

            <h2 className="text-xl flex gap-2 items-center">
              <IoEye />
              <span className="text-[#706F6F]">{total_view}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.object,
};
export default Content;
