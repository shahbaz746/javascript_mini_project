// async function getInput() {
//     let input = document.getElementById("amount").value;
//     let formCurrency = document.getElementById("form-currency").value;
//     let toCurrency = document.getElementById("to-currency").value;
//     console.log(input, formCurrency, toCurrency);

//     if (input === "") {
//         alert("Please enter a value");
//         return;
//     }
//     try {
        
     
//     let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${formCurrency}`);
//     let res1 = await fetch(`https://api.exchangerate-api.com/v4/latest/${toCurrency}`);
//     if (!res.ok) {
//         alert("Error fetching data. Please try again.");
//         return;
//     }
//     let data = await res.json();
//     console.log(data)
//     let data1 = await res1.json();
//     console.log(data1);
//     // let rate = data.rates[toCurrency];
//     console.log(input);
//     input = data / data1;
//     console.log(input);
//     }catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred while fetching the exchange rate. Please try again later.");
//         return;
        
//     }
    
// }

// function getInputValue() {
//     getInput();
// }



// just for use


async function getInput() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("form-currency").value;
    let toCurrency = document.getElementById("to-currency").value;

    if (amount === "") {
        alert("Please enter a value");
        return;
    }

    try {
        let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!res.ok) {
            alert("Error fetching data. Please try again.");
            return;
        }

        let data = await res.json();
        let rate = data.rates[toCurrency];
        let converted = amount * rate;

        console.log(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
        let result = document.getElementsByClassName("result")[0];
        result.innerText =
            `<h2>${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}</h2>`;
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while fetching the exchange rate.");
    }
}

function getInputValue() {
    getInput();
}
