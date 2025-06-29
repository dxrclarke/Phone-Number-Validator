const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

//const regex = /^[1]?\s?\(?[\d]{3}\)?[\s-]?[\d]{3}[-\s]?[\d]{4}$/;
const regex = /^[1]?\s?(\([\d]{3}\)|[\d]{3})[\s-]?[\d]{3}[-\s]?[\d]{4}$/;

const validator = () => {
  const num = userInput.value;
  if (num === "") {
    alert("Please provide a phone number")
  };
  if (num.match(regex)) {
    resultsDiv.innerText += `Valid US number: ${num}\n`
    //console.log("YES")
  } else {
    resultsDiv.innerText += `Invalid US number: ${num}\n`
  }
  
 
  //console.log("hi", num)
};

 /*const test = () => {
    const phrase = ("(asdf)");
    const reg = /\(/;
    const reg2 = /\)/;
    console.log(phrase.search(reg),phrase.search(reg2))
  }; */

const clear = () => {
  resultsDiv.innerText = "";
}

//const testFunct = () => console.log("we made it", input.value);

//validateBtn.addEventListener('click', testFunct);
checkBtn.addEventListener('click', validator);
clearBtn.addEventListener('click', clear);
//^[1]?\s?\(?[\d]{3}\)?[\s-]?[\d]{3}[-\s]?[\d]{4}

/*
regex:
  first number 1 doesn't need to be present ?
  space ?
  open parenthesis ?
  3 digits
  close parenthesis ?
  space ?
  3 digits
  space/hyphen ?
  4 digits

*/
