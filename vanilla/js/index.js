// // [2,4,5,63,2]

// function swap(arr, index) {
//   let present = arr[index];
//   let previous = arr[index - 1];
//   arr[index] = previous;
//   arr[index - 1] = present;
// }

// function sortMe(arr, target) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element === target) {
//       if (index === 0) continue;
//       let l = index;
//       while (l > 0) {
//         swap(arr, l);
//         l--;
//       }
//     } else {
//       continue;
//     }
//   }
//   return arr;
// }

// function anotherMethod(arr, target) {
//   const nonTarget = [];
//   const targetList = [];
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element == target) {
//       targetList.push(target);
//     } else {
//       nonTarget.push(element);
//     }
//   }
//   return [...targetList, ...nonTarget];
// }

// console.log(anotherMethod([2, 4, 5, 63, 2, 5, 6, 7, 2, 9, 10, 3, 2, 4, 1], 2));

function average(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    let val = arr[index];
    sum += val;
  }
  return sum;
}

console.log(average([1, 2, 3, 4, 5]));
