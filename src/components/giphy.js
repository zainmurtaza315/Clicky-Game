// import React from "react";
// import axios from "axios";

// const URL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// class Movie extends Component {
//   state = {
//     movieInformation: {},
//     title: ""
//   };

//   componentDidMount() {
//     this.searchMovie("The Batman");
//   }

//   searchMovie(query) {
//     axios
//       .get(URL + query + APIKEY)
//       .then(result => {
//         this.setState({
//           movieInformation: result.data
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   handleChange = event => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <MovieCard
//           title={this.state.movieInformation.Title}
//           plot={this.state.movieInformation.Plot}
//         />

//         {this.state.movieInformation.Rated === "G" && (
//           <img src={this.state.movieInformation.Poster} alt={"Movie"} />
//         )}

//         <h2>Searching for this movie... {this.state.title}</h2>

//         <input
//           type="text"
//           placeholder="Enter movie"
//           name="title"
//           value={this.state.title}
//           onChange={this.handleChange}
//         />
//         <button onClick={() => this.searchMovie(this.state.title)}>
//           Search Movie
//         </button>
//       </div>
//     );
//   }
// }

// export default Movie;
