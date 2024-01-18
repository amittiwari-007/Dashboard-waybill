const a=[1,2,3,4,5];
const b = map(a,function (num) {
  return num * num;
});

const c = filter((nums)=> nums%2===0 , a);

const d = reduce(a, function(accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

const e = slice(a,2,3);

const f = splice(a,2,1,6,7);


const g = find(a,(element)=> (element>=3));


const h = findIndex(a,(element)=> (element>3));
const i = includes(a,30);
const j = indexOf(a,40);



// custom functions

function map(array,callback){
   //initializes empty result array
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // adds all the result of the array given by callback function to the new array
    result[i]=callback(array[i]);
  }
  return result;
}

function filter(num,val){
   //initializes empty result array
    const temp=[];
    let j=0;
    for (let i = 0; i < val.length; i++) {
    if (num(val[i])) {
      // if the given filter is true then only it adds to the result array
      temp[j]=val[i];
      j++;
    }
  }
  return temp;
}

function reduce(array, callback, initialValue) {
    //it starts with the initial value , if it is not given then initial value will be first value of the array
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  // if initial value is not there then it starts with the first value else 2nd value
  const startIndex = initialValue !== undefined ? 0 : 1;


  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

function slice(array, startIndex, endIndex) {
  const newArray = [];
  const length = array.length;
  
  //if startindex is not given then assumes it to 0
  startIndex = startIndex !== undefined ? startIndex : 0;
  // if start index is negative then make it positive accordingly
  startIndex = startIndex >= 0 ? startIndex : Math.max(0, length + startIndex);
  // if endindex is not given then take it to the last index
  endIndex = endIndex !== undefined ? endIndex : length;
  // if end index is negative make it positive
  endIndex = endIndex >= 0 ? endIndex : Math.max(0, length + endIndex);

  let j=0;
  for (let i = startIndex; i < endIndex && i < length; i++) {
    newArray[j]=array[i];
    j++;
  }

  return newArray;
}

function splice(array, startIndex, deleteCount,...elementsToAdd) {
  const newArray = [...array]; 
  const removedElements = [];

   // if start index is negative then make it positive accordingly
  startIndex = startIndex >= 0 ? startIndex : Math.max(0, array.length + startIndex);

  // if deleteCount is greater than length of the array then make it to the length
  deleteCount = Math.min(deleteCount, array.length - startIndex);
  
  //firstly adding elements to be removed from original array and stroing it to a new array to return 
  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    removedElements[i-startIndex]=array[i];
  }
  
  // modifying our original array
  array.length=startIndex;
  let index=startIndex;
// adding the elements passed as input
  for(let i=0;i<[...elementsToAdd].length;i++){
    array[index]=[...elementsToAdd][i];
    index++;
  }
// adding rest of the elements
  for(let i=startIndex+deleteCount;i<newArray.length;i++){
      array[index]=newArray[i];
      index++;
  }
  return removedElements;
}


function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      //returning the element
      return array[i];
    }
  }
  return undefined;
}


function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      // returning the index of the element
      return i;
    }
  }
  return undefined;
}

function includes(array,val){
    for(let i=0;i<array.length;i++){
        if(array[i]===val)return true;
    }
    return false;
}

function indexOf(array,val){
    for(let i=0;i<array.length;i++){
        if(array[i]===val)return i;
    }
    return -1;
}