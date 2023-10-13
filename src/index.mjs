const numbers = [1,2,3,4,5];


let swapped = false;
for(let i=0; i<numbers.length; i++){
  for(let j=0; j<numbers.length; j++){
    if(numbers[j]>numbers[j+1]){
      const saveNum = numbers[j+1];
      numbers[j+1] = numbers[j];
      numbers[j]= saveNum;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }
}