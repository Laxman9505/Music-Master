import React, { Component } from "react";
import ReactDOM from "react-dom";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";
class App extends Component {
  state = { artistQuery: "", artist: "", tracks: [] };

  updateArtistquery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };
  searchArtist = () => {
    const artistQuery = this.state.artistQuery;

    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then((response) => response.json())
      .then((json) => {
        const artist = json.artists.items[0];
        this.setState({ artist: artist });

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
          .then((response) => response.json())
          .then((json) => this.setState({ tracks: json.tracks }))

          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          alignItems: "center",
          marginLeft: 500,
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', cursive",

            margin: 20,
            fontWeight: "bold",
          }}
        >
          Music Master
        </h2>
        <input
          onChange={this.updateArtistquery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search your Artist"
          type="text"
          style={{
            textAlign: "center",
            alignItems: "center",
            fontFamily: "'Press Start 2P', cursive",
          }}
        />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}
export default App;
