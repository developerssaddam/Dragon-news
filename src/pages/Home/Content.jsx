import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <h2 className="mb-3 font-semibold text-lg">Dragon News Home</h2>
      <div>
        {/* news-item */}
        <div className="border p-5 rounded-md mb-8">
          <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
            <div className="flex items-center gap-3">
              <Link>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaRpWXYLNVRXB7EKY44ooLFey-q7Kk11gx64Vu1wDlg&s"
                  alt=""
                />
              </Link>
              <div>
                <h2 className="font-semibold">Awlad Hossain</h2>
                <p>2022-08-21</p>
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
            <h2 className="font-semibold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>
            <img
              className="w-full max-h-[470px]"
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
            />
            <p className="border-b pb-5">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              <Link className="ml-5 text-[#FF8C47]">Read More</Link>
            </p>

            <div className="flex justify-between">
              <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[#706F6F]">4.9</span>
              </h2>

              <h2 className="text-xl flex gap-2 items-center">
                <IoEye />
                <span className="text-[#706F6F]">499</span>
              </h2>
            </div>
          </div>
        </div>

        {/* news-item */}
        <div className="border p-5 rounded-md mb-8">
          <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
            <div className="flex items-center gap-3">
              <Link>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaRpWXYLNVRXB7EKY44ooLFey-q7Kk11gx64Vu1wDlg&s"
                  alt=""
                />
              </Link>
              <div>
                <h2 className="font-semibold">Awlad Hossain</h2>
                <p>2022-08-21</p>
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
            <h2 className="font-semibold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>
            <img
              className="w-full max-h-[470px]"
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
            />
            <p className="border-b pb-5">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              <Link className="ml-5 text-[#FF8C47]">Read More</Link>
            </p>

            <div className="flex justify-between">
              <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[#706F6F]">4.9</span>
              </h2>

              <h2 className="text-xl flex gap-2 items-center">
                <IoEye />
                <span className="text-[#706F6F]">499</span>
              </h2>
            </div>
          </div>
        </div>

        {/* news-item */}
        <div className="border p-5 rounded-md mb-8">
          <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
            <div className="flex items-center gap-3">
              <Link>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaRpWXYLNVRXB7EKY44ooLFey-q7Kk11gx64Vu1wDlg&s"
                  alt=""
                />
              </Link>
              <div>
                <h2 className="font-semibold">Awlad Hossain</h2>
                <p>2022-08-21</p>
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
            <h2 className="font-semibold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>
            <img
              className="w-full max-h-[470px]"
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
            />
            <p className="border-b pb-5">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              <Link className="ml-5 text-[#FF8C47]">Read More</Link>
            </p>

            <div className="flex justify-between">
              <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[#706F6F]">4.9</span>
              </h2>

              <h2 className="text-xl flex gap-2 items-center">
                <IoEye />
                <span className="text-[#706F6F]">499</span>
              </h2>
            </div>
          </div>
        </div>

        {/* news-item */}
        <div className="border p-5 rounded-md mb-8">
          <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
            <div className="flex items-center gap-3">
              <Link>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaRpWXYLNVRXB7EKY44ooLFey-q7Kk11gx64Vu1wDlg&s"
                  alt=""
                />
              </Link>
              <div>
                <h2 className="font-semibold">Awlad Hossain</h2>
                <p>2022-08-21</p>
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
            <h2 className="font-semibold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>
            <img
              className="w-full max-h-[470px]"
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
            />
            <p className="border-b pb-5">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              <Link className="ml-5 text-[#FF8C47]">Read More</Link>
            </p>

            <div className="flex justify-between">
              <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[#706F6F]">4.9</span>
              </h2>

              <h2 className="text-xl flex gap-2 items-center">
                <IoEye />
                <span className="text-[#706F6F]">499</span>
              </h2>
            </div>
          </div>
        </div>

        {/* news-item */}
        <div className="border p-5 rounded-md mb-8">
          <div className="auth_info flex justify-between items-center bg-[#F3F3F3] p-3">
            <div className="flex items-center gap-3">
              <Link>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaRpWXYLNVRXB7EKY44ooLFey-q7Kk11gx64Vu1wDlg&s"
                  alt=""
                />
              </Link>
              <div>
                <h2 className="font-semibold">Awlad Hossain</h2>
                <p>2022-08-21</p>
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
            <h2 className="font-semibold">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h2>
            <img
              className="w-full max-h-[470px]"
              src="https://images.prothomalo.com/prothomalo-bangla%2F2024-04%2F14925abb-df20-41c8-bb6d-cc2950e3090f%2FThanchi_Police_01.jpeg?rect=0%2C31%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.3"
              alt=""
            />
            <p className="border-b pb-5">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...
              <Link className="ml-5 text-[#FF8C47]">Read More</Link>
            </p>

            <div className="flex justify-between">
              <h2 className="text-[#FF8C47] flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[#706F6F]">4.9</span>
              </h2>

              <h2 className="text-xl flex gap-2 items-center">
                <IoEye />
                <span className="text-[#706F6F]">499</span>
              </h2>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Content;
