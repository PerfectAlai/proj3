const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
  if ((height === "") || (height < 0) || (isNaN(height)))
    results.innerHTML = "Please enter a valid height";

  else if ((weight === "") || (weight < 0) || (isNaN(weight)))
    results.innerHTML = "Please enter a valid weight";

  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    console.log(bmi);
  }

 
  
  if(bmi > 25){
   document.getElementById("advice").innerHTML = `Your bmi is ${bmi} and your are overweight`
  }

  else if(bmi <  18.5) {
    document.getElementById("advice").innerHTML = `Your bmi is ${bmi} and your are underweight`
   }

  else if(bmi >= 18.5 && bmi <= 24.9) {
document.getElementById("advice").innerHTML = `Your bmi is  ${bmi} and your are a normal weight`
  }

else{
  document.getElementById("advice").innerHTML = `you must enter a number`
}
  
}
);


