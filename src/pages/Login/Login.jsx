import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Dragon news | Login</title>
      </Helmet>

      <NavBar />
      <h1>Login</h1>
    </div>
  );
};

export default Login;
