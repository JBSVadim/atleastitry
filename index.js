function abraKadabra() {
  return [getMin(arguments), getMax(arguments), middleNumb(arguments)];
}
function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) { min = arr[i] }
  }
  return min;
}
function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { max = arr[i] }
  } return max;
}
function middleNumb(arr) {
  let total = arr[0]; 
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  } return total / arr.length;
}
function getRandom() { return Math.floor(Math.random() * (100 - 1)) + 1; }


let arr = [];

for (let i = 0; i < 10; i++) {
	arr.push((Math.floor(Math.random() * (100 - 1)) + 1));
}

console.log(arr);

const array1 = [1, 2, 3];
const array2 = [4, 5 ,6];
const arrayTotal = array1.concat(array2);

console.log(arrayTotal);

const revArray = ['Show', 'must', 'go', 'on'];
revArray.reverse();

console.log(revArray);

let arrayPush = [1, 2, 3];
let total = arrayPush.push(4,5,6);
console.log(arrayPush);

let arrayUnshift = [1, 2, 3];
let totalUnshift = arrayUnshift.unshift(4,5,6);
console.log(arrayUnshift);

let jsArray = ['js', 'css', 'jq'];
console.log(jsArray[0])
let shifter = jsArray.shift();
console.log(jsArray[length]);

let sliceArray = [1,2,3,4,5,6];

let slicedArray = sliceArray.slice(0,3,4,5,6);
console.log(slicedArray);
let slicedArray2 = sliceArray.slice(3,5);
console.log(slicedArray2);

/*___________________*/

let splicedArr = [1,2,3,4,5];
let spliceOne = splicedArr.splice(-4, 2);
console.log(splicedArr);


let splicedArr2 = [1,2,3,4,5];
let spliceTwo = splicedArr2.splice(-1, 1,);
let spliceThree = splicedArr2.splice(0,1);
console.log(splicedArr2);

//-------------------------------------------------

let randomNumberArr = [3,5,8,4,9];
randomNumberArr.sort();
console.log(randomNumberArr);