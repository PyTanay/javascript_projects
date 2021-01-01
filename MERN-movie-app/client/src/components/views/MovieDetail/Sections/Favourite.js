import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

export default function Favourite(props) {
  const [FavouriteNumber, setFavouriteNumber] = useState(0);
  const [Favourited, setFavourited] = useState(false);
  const variable = {
    userFrom: props.userFrom,
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.backdrop_path,
    movieRunTime: props.movieInfo.runtime,
  };
  useEffect(() => {
    axios.post("/api/favourite/favouriteNumber", variable).then((res) => {
      if (res.data.success) {
        setFavouriteNumber(res.data.FavouriteNumber);
      } else {
        console.log("Failed to get favourite number.");
      }
    });
    axios.post("/api/favourite/favourited", variable).then((res) => {
      if (res.data.success) {
        setFavourited(res.data.favourited);
      } else {
        console.log("Failed to get favourite info!");
      }
    });
  }, []);
  const onClickFavourite = () => {
    if (Favourited) {
      //   when already added to the fav list
      axios.post("/api/favourite/removeFromFavourite", variable).then((res) => {
        if (res.data.success) {
          setFavouriteNumber(FavouriteNumber - 1);
          setFavourited(!Favourited);
        } else {
          alert("You can not use favourite functionality without logging-in. Please Sign-up.");
        }
      });
    } else {
      //   when not yet added to the fav list
      axios.post("/api/favourite/addToFavourite", variable).then((res) => {
        if (res.data.success) {
          setFavouriteNumber(FavouriteNumber + 1);
          setFavourited(!Favourited);
        } else {
          alert(
            "You can not use favourite functionality without logging-in.\nPlease Sign-in. If you don't have account please consider signing up."
          );
        }
      });
    }
  };
  return (
    <div>
      <Button onClick={onClickFavourite}>
        {Favourited ? "Remove from favourites" : "Add to Favourite"} {FavouriteNumber}
      </Button>
    </div>
  );
}
