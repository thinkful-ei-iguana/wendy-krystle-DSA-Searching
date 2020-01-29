const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(array, value, start = 0, end = array.length - 1) {
  //base case
  if (start > end) {
    console.log(`${value} not included in list`);
    return -1;
  }
  //find the midpoint and item at that index
  let index = Math.floor((start + end) / 2);
  let item = array[index];
  //case where the midpoint is the value being targeted
  if (item === value) {
    console.log(index);
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

binarySearch(sortedList, 16);
// 8 located at index of 3
// 16 not included in list




//3

function deweySearching(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {   
    if (dewey[i] == title) {
      return 'found book'
    } 
  }
  if (item < dewey) {
    return deweySearching(dewey, title, index + 1, end);
  }
  else if (item > dewey) {
    return deweySearching(dewey, title, start, index - 1);
  }
}
console.log(deweySearching(['be', 'he', 'hi'], 'hi'))

//4
