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
