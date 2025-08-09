async function getUserName(){
    let input = document.getElementById("username").value;
    if(input.trim() === "") {
        alert("Please enter a username");
        return;
    }
    console.log("Searching for user:", input);
    try{
        let res = await fetch(`https://api.github.com/users/${input}`);
        if(!res.ok){
            throw new Error("User not found");
        }
        let data = await res.json();
        console.log(data);
        let profile = document.getElementById("profile");
        profile.innerHTML =`
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        `
    } catch(err) {
        console.error("Error fetching user data:", err);}
    }

    function search(){
        getUserName();
    }