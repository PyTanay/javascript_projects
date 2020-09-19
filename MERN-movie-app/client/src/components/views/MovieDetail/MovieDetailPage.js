import { Button, Descriptions, Row } from "antd";
import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import GridCard from "../LandingPage/Sections/GridCard";
import MainImage from "../LandingPage/Sections/MainImage";
import Favourite from "./Sections/Favourite";

function MovieDetailPage(props) {
  const [Movie, setMovie] = useState({});
  const [Crews, setCrews] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const movieId = props.match.params.movieId;
  useEffect(() => {
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
          .then((res) => res.json())
          .then((res) => {
            setCrews(res.cast);
          });
      });
  }, []);

  const handleClick = () => {
    setActorToggle(!ActorToggle);
  };
  return (
    <div style={{ width: "100%", margin: 0 }}>
      {Movie.id && (
        <MainImage
          image={`${IMAGE_URL}w1280${
            Movie.backdrop_path && Movie.backdrop_path
          }`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}
      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favourite
            userFrom={localStorage.getItem("userId")}
            movieId={movieId}
            movieInfo={Movie}
          />
        </div>
      </div>

      {/* Movie info table */}
      <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">
          {Movie.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date">
          {Movie.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="Revenue">{Movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="Runtime">{Movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="Vote Average">
          {Movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Vote Count">
          {Movie.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="Status">{Movie.status}</Descriptions.Item>
        <Descriptions.Item label="Popularity">
          {Movie.popularity}
        </Descriptions.Item>
      </Descriptions>
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClick}>Toggle Actor View</Button>
        </div>
      </div>

      {/* grid card */}
      {ActorToggle && (
        <Row gutter={[16, 16]}>
          {Crews[0] &&
            Crews.map((crew, index) => (
              <React.Fragment key={index}>
                {crew.profile_path && (
                  <GridCard
                    image={`${IMAGE_URL}w500/${crew.profile_path}`}
                    actor
                  />
                )}
              </React.Fragment>
            ))}
        </Row>
      )}
    </div>
  );
}

export default MovieDetailPage;
