import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Dragon news | Register</title>
      </Helmet>

      <NavBar />
      <h1>Register</h1>
    </div>
  );
};

export default Register;
