import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="py-10">
      <Helmet>
        <title>Dragon news | Home</title>
      </Helmet>

      <Header />
    </div>
  );
};

export default Home;
