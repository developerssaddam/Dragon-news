import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </h3>
      <p className="font-medium text-xl">
        {moment().format("dddd, MMMM D YYYY")}
      </p>
    </div>
  );
};

export default Header;
