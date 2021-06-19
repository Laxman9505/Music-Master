import React, { Component } from "react";
import ReactDOM from "react-dom";

const Artist = ({ artist }) => {
  if (!artist) return null;
  const { images, name, followers, genres } = artist;
  return (
    <div>
      <h3
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {followers.total} followers
      </p>
      <p
        style={{
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {genres.join(",")}
      </p>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        className="image"
      />
    </div>
  );
};

export default Artist;
