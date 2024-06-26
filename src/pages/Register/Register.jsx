import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  // handleShowHidePassword.
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // handleRegister.
  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const photo = data.get("photo");
    const password = data.get("password");
    // const terms = data.get("terms");

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success('User registration successfull!')
        e.target.reset();
        navigate('/login')
      })
      .catch((error) => {
        toast.warn(error.message)
      });
  };

  return (
    <div className="p-3">
      <Helmet>
        <title>Dragon news | Register</title>
      </Helmet>

      <NavBar />

      <div className="w-full mx-auto my-10 max-w-md p-8 space-y-3 rounded-xl bg-[#E8E9EB] text-gray-900">
        <h1 className="text-2xl font-bold text-center">
          Register Your Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm relative">
            <label className="block">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white focus:border-violet-400"
            />
            <span
              onClick={handleShowHidePassword}
              className="absolute bottom-4 right-4 cursor-pointer"
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>

          <div className="space-y-1 text-sm flex gap-2">
            <input type="checkbox" name="terms" />
            <label className="block">Accept Term & Conditions</label>
          </div>

          <button className="block w-full p-3 text-center rounded-sm bg-[#403F3F] text-white">
            Register Now
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?
          <Link to="/login" className="underline text-gray-900">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
