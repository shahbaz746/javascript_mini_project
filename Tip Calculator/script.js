function getInput(){
    let billAmount = document.getElementById("billAmount").value;
    let Percentage = document.getElementById("tipPercentage").value;
   if(billAmount === "" || Percentage === ""){
       alert("Please fill all the fields");
       return;
   }
   else{
       Percentage = (Percentage / 100) * billAmount;
       let result = document.getElementsByClassName("result")[0];
        result.innerHTML = `<h5>Tip Amount: ${Percentage.toFixed(2)}</h5>`;   
   }
}

function calculate(){
   getInput();
}