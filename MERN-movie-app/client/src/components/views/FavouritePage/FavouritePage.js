import React, { useState, useEffect } from "react";
import "./favourite.css";
import axios from "axios";
import { Popover } from "antd";
import { IMAGE_URL } from "../../Config";

export default function FavouritePage() {
  const [FavouriteMovies, setFavouriteMovies] = useState([]);
  const variable = { userFrom: localStorage.getItem("userId") };
  useEffect(() => {
    fetchFavouriteMovies();
  }, []);
  const fetchFavouriteMovies = () => {
    axios.post("/api/favourite/getFavouriteMovie", variable).then((res) => {
      if (res.data.success) {
        setFavouriteMovies(res.data.favourites);
      } else {
        console.log("Failed to get favourite movies!");
      }
    });
  };
  const renderTableBody = FavouriteMovies.map((movie, index) => {
    const content = <div>{movie.movieImage ? <img src={`${IMAGE_URL}w500${movie.movieImage}`} alt="movieImage" /> : "No Image"}</div>;

    const onClickRemove = (movieId) => {
      const variable = {
        movieId,
        userFrom: localStorage.getItem("userId"),
      };
      axios.post("/api/favourite/removeFromFavourite", variable).then((res) => {
        if (res.data.success) {
          fetchFavouriteMovies();
        } else {
          console.log("Failed to remove from favourites.");
        }
      });
    };
    return (
      <tr key={index}>
        <Popover content={content} title={movie.movieTitle}>
          <td>{movie.movieTitle}</td>
        </Popover>

        <td>{movie.movieRunTime}</td>
        <td>
          <button onClick={() => onClickRemove(movie.movieId)}>Remove</button>
        </td>
      </tr>
    );
  });
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3>Favourite Movies by ME</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie Runtime</th>
            <th>Remove from favourites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}
