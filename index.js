function biggerThanThree(numbers) {
    let newarray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 3) {
        newarray.push(numbers[i]);
      }
    }
    return newarray;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  
  export default biggerThanThree;
  