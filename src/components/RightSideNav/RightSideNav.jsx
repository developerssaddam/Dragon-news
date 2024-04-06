import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const RightSideNav = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  // handleLoginWithGoogle.
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        toast.success("User login successfull!");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  // handleLoginWithGoogle.
  const handleLoginWithGithub = () => {
    loginWithGithub()
      .then((result) => {
        toast.success("User login successfull!");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Login With</h2>

      <button
        onClick={handleLoginWithGoogle}
        className="flex items-center gap-3 border-2 py-3 text-lg font-medium rounded-md w-full text-center justify-center mb-3"
      >
        <GrGoogle /> Login With Google
      </button>

      <button
        onClick={handleLoginWithGithub}
        className="flex items-center gap-3 border-2 py-3 text-lg font-medium rounded-md w-full text-center justify-center mb-3"
      >
        <FaGithub /> Login With Google
      </button>

      <div className="find_us my-8">
        <h2 className="font-semibold text-lg my-3">Find Us On</h2>
        <div className="border-2 rounded-md">
          <a
            href="#"
            className="flex items-center gap-2 font-medium  p-2 border-b-2"
          >
            <FaFacebookF className="text-[#3B599C]" />
            Facebook
          </a>

          <a
            href="#"
            className="flex items-center gap-2 font-medium  p-2 border-b-2"
          >
            <FaTwitter className="text-[#58A7DE]" />
            Twitter
          </a>

          <a href="#" className="flex items-center gap-2 font-medium  p-2">
            <FaInstagramSquare className="text-red-400" />
            Instagram
          </a>
        </div>
      </div>

      <div className="qzone bg-[#F3F3F3] p-4 *:mb-3 mb-8">
        <Link>
          <img src={qZone1} alt="" />
        </Link>
        <Link>
          <img src={qZone2} alt="" />
        </Link>
        <Link>
          <img src={qZone3} alt="" />
        </Link>
      </div>

      <div className="amazing bg-[#04041F] text-white p-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="text-xl font-semibold bg-[#F100B7] px-5 py-3 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
