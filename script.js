let evenNum = document.querySelector("#even");
let oddNum = document.querySelector("#odd");

const displayNum = () => {
  generateArrOfNum(randomNum, evenNum, 0, "even");
  generateArrOfNum(randomNum, oddNum, 1, "odd");
};

const generateArrOfNum = (randomNumFunc, domElement, calc, text) => {
  domElement.innerHTML = text;
  let arr = [];
  while (arr.length < 20) {
    randomNumFunc(1, 100, arr, calc);
  };
  for(let i = 0; i < arr.length; i++ ){
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    domElement.append(li);
  };
};

const randomNum = (min, max, arr, calc) => {
  let num = Math.floor(Math.random() * max) + min;
  num % 2 === 0 ? arr.push(num - calc) : randomNum(min, max, arr, calc);
  return arr.sort((a, b) => a - b);
};
