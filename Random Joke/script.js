async function getJokes(){
    try{
    const res = await fetch('https://official-joke-api.appspot.com/random_ten');
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    const Joke = document.getElementsByClassName('joke')[0];
    Joke.innerHTML = `
        <p>${data[0].setup}</p>
        <p>${data[0].punchline}</p>
    `;
    } catch (error) {
        console.error('Error fetching joke data:', error);
    }
}
function setJokes(){

    getJokes();
}