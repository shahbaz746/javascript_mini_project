

const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The future depends on what you do today. – Mahatma Gandhi",
  "A person who never made a mistake never tried anything new. – Albert Einstein",
  "Everything you can imagine is real. – Pablo Picasso",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "You don’t learn to walk by following rules. You learn by doing. – Richard Branson",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Dream big and dare to fail. – Norman Vaughan",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Creativity is intelligence having fun. – Albert Einstein",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It's not about ideas. It's about making ideas happen. – Scott Belsky",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Learning never exhausts the mind. – Leonardo da Vinci",
  "Your limitation—it’s only your imagination.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Stay away from those people who try to disparage your ambitions. – Mark Twain",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "Don’t be busy, be productive.",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "If you want something you’ve never had, you must be willing to do something you’ve never done.",
  "The expert in anything was once a beginner.",
  "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Be stubborn about your goals, and flexible about your methods."
];


function randomQuotes(){
    
    let randomItem = quotes[Math.floor(Math.random() * quotes.length)]
    console.log(randomItem)
    let ul = document.getElementsByClassName("list")[0]
    ul.innerHTML = ""
    let li = document.createElement("li");
    li.textContent = randomItem;
    document.getElementsByClassName("list")[0].appendChild(li);
}
changeQuotes();
function changeQuotes(){
    randomQuotes(quotes);
}
setInterval(randomQuotes, 5000);