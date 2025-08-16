// async function search() {
//     let input = document.getElementById('search').value;
//     try {
//         let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`);
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error during search:', error);}

//     }

//     function handleSearch() {
//         search();
//     }

//show all the cards data

// async function showData() {
//   let input = document.getElementById("search").value; // moved here
//   let response = await fetch(
//     `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s`
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   let data = await response.json();
//   console.log(data);

// let img = document.querySelectorAll(".card");
// img.forEach((card, index) => {
//   card.innerHTML = `<img src="${data.Search[index].Poster}"/>`;
// });

// if (data.Response === "True") {
//   data.Search.forEach((movie) => {
//     // Create a card for each movie
//     let card = document.createElement("div");
//     card.style.width = "200px";
//     card.style.border = "1px solid #ccc";
//     card.style.borderRadius = "10px";
//     card.style.overflow = "hidden";
//     card.style.textAlign = "center";
//     card.style.background = "#fff";

//     card.innerHTML = `
//                   <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; height: 300px; object-fit: cover;">
//                   <h5>${movie.Title}</h5>
//                   <p>${movie.Year}</p>
//               `;

//     result.appendChild(card);
//   });
// } else {
//   container.innerHTML = `<p>No results found</p>`;
// }
// }
// showData();

// async function search() {
//   let spinner = document.getElementById("spinner");
//   spinner.style.display = "block"; // Show spinner
//   try {
//     let input = document.getElementById("search").value; // moved here
//     let res = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`
//     );

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     let data = await res.json();
//     console.log(data);

//     // dom
//     let img = document.querySelectorAll(".card")[0];
//     img.innerHTML = `<img src="${data.Search[0].Poster}"/>`;

// let img = document.querySelectorAll(".card");
// img.forEach((card,index) => {
//   card.innerHTML = `<img src="${data.Search[index].Poster}"/>`;
// });

//     let title = document.getElementsByClassName("card-body")[0];
//     title.innerHTML = `<h5 class="card-title">${data.Search[0].Title}</h5>`;
//   } catch (error) {
//     document.body.innerHTML = "";
//     document.body.innerHTML = `<h1>Error loading movies</h1>`;
//     document.body.style.display = "flex";
//     document.body.style.justifyContent = "center";
//     document.body.style.alignItems = "center";
//     document.body.style.height = "100vh";
//     document.body.style.textAlign = "center";
//     console.error("Error during search:", error);
//   } finally {
//     spinner.style.display = "none"; // Hide spinner
//   }
// }

// just for try
// async function search() {
//     let input = document.getElementById('search').value;
//     let result = document.getElementById('result');

//     // container.innerHTML = ""; // clear previous results

//     try {
//         let res = await fetch(`https://www.omdbapi.com/?apikey=1d146a63&s=${input}`);
//         let data = await res.json();
//         console.log(data);

//         if (data.Response === "True") {
//             data.Search.forEach(movie => {
//                 // Create a card for each movie
//                 let card = document.createElement('div');
//                 card.style.width = "200px";
//                 card.style.border = "1px solid #ccc";
//                 card.style.borderRadius = "10px";
//                 card.style.overflow = "hidden";
//                 card.style.textAlign = "center";
//                 card.style.background = "#fff";

//                 card.innerHTML = `
//                     <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; height: 300px; object-fit: cover;">
//                     <h5>${movie.Title}</h5>
//                     <p>${movie.Year}</p>
//                 `;

//                 result.appendChild(card);
//             });
//         } else {
//             container.innerHTML = `<p>No results found</p>`;
//         }

//     } catch (error) {
//         console.error(error);
//         container.innerHTML = `<p>Error loading movies</p>`;
//     }
// }

// function handleSearch() {
//   search();
// }

// just for try
// async function getMovies() {
//   let spinner = document.getElementById("spinner");
//   spinner.style.display = "block"; // Show spinner
//   try {
//     // Pick a random search word
//     const randomWords = [
//       "Batman",
//       "Superman",
//       "Avengers",
//       "Spiderman",
//       "Iron Man",
//       "Captain America",
//       "Thor",
//       "Hulk",
//       "Doctor Strange",
//       "Black Panther",
//       "Guardians of the Galaxy",
//       "Wonder Woman",
//       "Aquaman",
//       "Flash",
//       "Deadpool",
//       "Joker",
//       "Inception",
//       "Interstellar",
//       "Titanic",
//       "Avatar",
//       "The Dark Knight",
//       "Man of Steel",
//       "Shazam",
//       "Ant-Man",
//       "Venom",
//       "Justice League",
//       "Suicide Squad",
//       "The Lion King",
//       "Frozen",
//       "Toy Story",
//     ];
//     const random = randomWords[Math.floor(Math.random() * randomWords.length)];

//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=1d146a63&s=${random}`
//     );
//     const data = await res.json();

//     if (data.Response === "True") {
//       showMovies(data.Search); // Pass movies to display function
//     } else {
//       console.log("No movies found.");
//     }
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   } finally {
//     spinner.style.display = "none"; // Hide spinner
//   }
// }

// getMovies();

// async function showMovies(movies) {
//   let spinner = document.getElementById("spinner");
//   spinner.style.display = "block"; // Show spinner
//   try {
//     let input = document.getElementById("search").value; // moved here
//     let res = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`
//     );

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     let data = await res.json();
//     console.log(data);

//     const container = document.getElementById("movie-cards");
//     container.innerHTML = ""; // Clear old results

//     movies.forEach((movie) => {
//       const card = document.createElement("div");
//       card.classList.add("movie-card");

//       card.innerHTML = `
//       <img src="${
//         movie.Poster !== "N/A"
//           ? movie.Poster
//           : "https://via.placeholder.com/150"
//       }" alt="${movie.Title}">
//       <h3>${movie.Title}</h3>
//       <p>${movie.Year}</p>
//     `;

//       container.appendChild(card);

//       let img = document.getElementsByClassName(0);
//       img.img = `src="${
//         movie.Poster !== "N/A"
//           ? movie.Poster
//           : "https://via.placeholder.com/150"
//       }" alt="${movie.Title}"`;
//     });
//   } catch (error) {
//     document.body.innerHTML = "";
//     document.body.innerHTML = `<h1>Error loading movies</h1>`;
//     document.body.style.display = "flex";
//     document.body.style.justifyContent = "center";
//     document.body.style.alignItems = "center";
//     document.body.style.height = "100vh";
//     document.body.style.textAlign = "center";
//     console.error("Error during search:", error);
//   } finally {
//     spinner.style.display = "none"; // Hide spinner
//   }








  // const container = document.getElementById("movie-cards");
  // container.innerHTML = ""; // Clear old results

  // movies.forEach(movie => {
  //   const card = document.createElement("div");
  //   card.classList.add("movie-card");

  //   card.innerHTML = `
  //     <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
  //     <h3>${movie.Title}</h3>
  //     <p>${movie.Year}</p>
  //   `;

  //   container.appendChild(card);
  // });

  // try

  //   let spinner = document.getElementById("spinner");
  // spinner.style.display = "block"; // Show spinner
  //   try {
  //     let input = document.getElementById("search").value; // moved here
  //     let res = await fetch(
  //       `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`
  //     );

  //     if (!res.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     let data = await res.json();
  //     console.log(data);

  //     // dom
  //     let img = document.querySelectorAll(".card")[0];
  //     img.innerHTML = `<img src="${data.Search[0].Poster}"/>`;

  //     let img = document.querySelectorAll(".card");
  //     img.forEach((card,index) => {
  //       card.innerHTML = `<img src="${data.Search[index].Poster}"/>`;
  //     });

  //     let title = document.getElementsByClassName("card-body")[0];
  //     title.innerHTML = `<h5 class="card-title">${data.Search[0].Title}</h5>`;
  //   } catch (error) {
  //     document.body.innerHTML = "";
  //     document.body.innerHTML = `<h1>Error loading movies</h1>`;
  //     document.body.style.display = "flex";
  //     document.body.style.justifyContent = "center";
  //     document.body.style.alignItems = "center";
  //     document.body.style.height = "100vh";
  //     document.body.style.textAlign = "center";
  //     console.error("Error during search:", error);
  //   } finally {
  //     spinner.style.display = "none"; // Hide spinner
  //   }
  // }
  //  function handleSearch() {
  //   showMovies();
// }

// function handleSearch() {
//   showMovies();
// }





// try it




async function getMovies() {
  let spinner = document.getElementById("spinner");
  spinner.style.display = "block"; // Show spinner
  try {
    const randomWords = [
      "Batman", "Superman", "Avengers", "Spiderman", "Iron Man",
      "Captain America", "Thor", "Hulk", "Doctor Strange", "Black Panther",
      "Guardians of the Galaxy", "Wonder Woman", "Aquaman", "Flash",
      "Deadpool", "Joker", "Inception", "Interstellar", "Titanic", "Avatar",
      "The Dark Knight", "Man of Steel", "Shazam", "Ant-Man", "Venom",
      "Justice League", "Suicide Squad", "The Lion King", "Frozen", "Toy Story"
    ];

    const random = randomWords[Math.floor(Math.random() * randomWords.length)];
    let allMovies = [];

    // Fetch multiple pages (example: 3 pages = 30 movies)
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(`https://www.omdbapi.com/?apikey=1d146a63&s=${random}&page=${page}`);
      const data = await res.json();

      if (data.Response === "True") {
        allMovies = allMovies.concat(data.Search);
      } else {
        break;
      }
    }

    if (allMovies.length > 0) {
      showMovies(allMovies); // display all movies
    } else {
      console.log("No movies found.");
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    spinner.style.display = "none"; // Hide spinner
  }
}

getMovies();

// ✅ Only displays movies (no fetching here)
function showMovies(movies) {
  // const container = document.getElementById("movie-cards");
  // container.innerHTML = ""; // Clear old results

  // movies.forEach((movie) => {
  //   const card = document.createElement("div");
  //   card.classList.add("movie-card");

  //   card.innerHTML = `
  //     <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
  //     <h3>${movie.Title}</h3>
  //     <p>${movie.Year}</p>
  //   `;

  //   container.appendChild(card);
  // });




  // function showMovies(movies) {
  const container = document.getElementById("movie-cards");
  container.innerHTML = ""; // Clear old results

  movies.forEach((movie) => {
    // ✅ Skip movies without poster
    if (movie.Poster === "N/A") {
      return;
    }

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    container.appendChild(card);
  });
// }

}


 function handleSearch() {
  showMovies();
}

