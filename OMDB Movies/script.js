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

async function showData() {
  let input = document.getElementById("search").value; // moved here
  let response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  let data = await response.json();
  console.log(data);

  let img = document.querySelectorAll(".card");
  img.forEach((card, index) => {
    card.innerHTML = `<img src="${data.Search[index].Poster}"/>`;
  });
}
showData();

async function search() {
  let spinner = document.getElementById("spinner");
  spinner.style.display = "block"; // Show spinner
  try {
    let input = document.getElementById("search").value; // moved here
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await res.json();
    console.log(data);

    // dom
    let img = document.querySelectorAll(".card")[0];
    img.innerHTML = `<img src="${data.Search[0].Poster}"/>`;

    // let img = document.querySelectorAll(".card");
    // img.forEach((card,index) => {
    //   card.innerHTML = `<img src="${data.Search[index].Poster}"/>`;
    // });

    let title = document.getElementsByClassName("card-body")[0];
    title.innerHTML = `<h5 class="card-title">${data.Search[0].Title}</h5>`;
  } catch (error) {
    document.body.innerHTML = "";
    document.body.innerHTML = `<h1>Error loading movies</h1>`;
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.textAlign = "center";
    console.error("Error during search:", error);
  } finally {
    spinner.style.display = "none"; // Hide spinner
  }
}

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

function handleSearch() {
  search();
}
