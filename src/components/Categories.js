import React, { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";
  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [movies, setMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  //Get Movie from Api
  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovies(response.data);
      setFilteredMovies(response.data);
    });
  }

  //Get Category from Api
  async function getAllCategories() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovieCategory(response.data);
    });
  }

  useEffect(() => {
    getAllMovies();
    getAllCategories();
  }, []);

 

  function getFilteredList(category) {
    if (category === "All") {
      setFilteredMovies(movies);
    } else {
      var filteredMovies = movies.filter(
        (item) =>
          item.movieCategory.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredMovies(filteredMovies);
    }
  }

  return (
    <div className="widget blog-widget">
      <div className="widget-title mb-5">
        <h5 className="title">Categories</h5>
      </div>
      <div className="sidebar-cat">
        <ul>
          {movieCategory.map((category, index) => {
            return (
              <li key={index}>
                <button
                  className="action"
                  onClick={() => getFilteredList("Action")}
                >
                  {category.name}
                </button>{" "}
                <span>12</span>
              </li>
            );
          })}

          {/* <li>
          <button href="#">Action Movies</button> <span>10</span>
        </li>
        <li>
          <button href="#">Streaming</button> <span>9</span>
        </li>
        <li>
          <button href="#">Download</button> <span>16</span>
        </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
