let input = document.getElementById('search');
async function search() {
    try {
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1d146a63&s=${input}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error during search:', error);}
        
    }


    function handleSearch() {
        search();
    }
    
