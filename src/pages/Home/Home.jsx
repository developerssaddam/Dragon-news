import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import NavBar from "../../components/NavBar/NavBar";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import Content from "./Content";
import RightSideNav from "../../components/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div className="py-10">
      <Helmet>
        <title>Dragon news | Home</title>
      </Helmet>

      <header className="mb-5">
        <Header />
        <BreakingNews />
        <NavBar />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <LeftSideNav />
        <div className="md:col-span-2">
          <Content />
        </div>
        <RightSideNav />
      </main>
    </div>
  );
};

export default Home;
