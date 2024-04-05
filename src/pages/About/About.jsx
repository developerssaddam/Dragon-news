import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Dragon news | About</title>
      </Helmet>
      <NavBar />
      <h1>About page</h1>
    </div>
  );
};

export default About;
