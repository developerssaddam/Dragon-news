import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";

const Carrer = () => {
  return (
    <div>
      <Helmet>
        <title>Dragon news | Carrer</title>
      </Helmet>

      <NavBar />
      <h1>Carrer page</h1>
    </div>
  );
};

export default Carrer;
