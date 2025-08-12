let result = document.getElementsByClassName("result")[0];

async function getAdvices() {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await res.json();
    result.innerHTML = `
        <h3>${data.slip.advice}</h3>
        `;
  } catch (error) {
    console.error("Not Found");
  }
}
function setAdvice() {
  getAdvices();
}
