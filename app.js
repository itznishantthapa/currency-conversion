import { countryList } from "./code.js";

const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3f167a988ebe4817b3ab7440738f4892`





const selCon1 = document.getElementById("sel1");
const selCon2 = document.getElementById("sel2");


const img1 = document.querySelector(".country1 img");
const img2 = document.querySelector(".country2 img");

const btn = document.querySelector(".button-86");










for (const currency in countryList) {
  let option1 = document.createElement("option");
  option1.value = currency;
  option1.innerText = currency;
  if (currency === "USD") {
    option1.selected = "selected";
  }
  selCon1.append(option1);



  let option2 = document.createElement("option");
  option2.value = currency;
  option2.innerText = currency;
  if (currency === "NPR") {
    option2.selected = "selected";
  }
  selCon2.append(option2);
}

//updating the flag
function updateFlag(selectedOption, imgeX) {
  const currencyCode = selectedOption.value;
  const countryCode = countryList[currencyCode];
  console.log(countryCode, currencyCode);
  const newImageUrl = `https://flagsapi.com/${countryCode}/flat/64.png`
  imgeX.src = newImageUrl;


}


selCon1.addEventListener("change", () => {
  updateFlag(selCon1, img1);
});


selCon2.addEventListener("change", () => {
  updateFlag(selCon2, img2);
});




btn.addEventListener("click",async()=>{
  let inputValue=document.querySelector("#amount-input");
  let amountValue=inputValue.value;
  console.log("this is amount value",amountValue);
  if(amountValue==="" || amountValue<0 ){
    amountValue=1;
    inputValue.value="1";
  }

   
    let response = await fetch(url);
    let data =await response.json();

console.log(selCon1.value, "currency To", selCon2.value);
  let rateFrom=data.rates[selCon1.value]
  let rateTo=data.rates[selCon2.value]


    let totalAmount=amountValue*(rateTo/rateFrom);
    console.log("Total amount is",totalAmount)





});





































// let elemennerText="Hello World";
// document.body.append(element);

// for (const code in countryList){
//   console.nt =document.createElement("h1");
// element.ilog("Currency Code:"+code+" Country Code:"+countryList[code]);
// }

