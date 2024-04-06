import { Link } from "react-router-dom";
import "./LeftSideNav.css";
import SportsNews from "../SportsNews/SportsNews";
import { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  // handleActive
  const handleActive = (e) => {
    const allLinks = document.getElementById("active").childNodes;
    for (const link of allLinks) {
      link.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  // Load all categories data.
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-3 font-semibold text-lg ">All Caterogy</h2>

      <div id="active" className="mb-3">
        {categories.map((categorie, index) => (
          <Link
            key={index}
            onClick={handleActive}
            className="py-3 block rounded-md text-center"
          >
            {categorie.name}
          </Link>
        ))}
      </div>
      <SportsNews />
    </div>
  );
};

export default LeftSideNav;
