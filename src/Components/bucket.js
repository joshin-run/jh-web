function modolo(x) {
  if (x < 0) {
    x = x * -1;
  }
  let a = x % 2;
  if (a > 0) {
    return 0;
  } else {
    return 1;
  }
}
modolo(-209309390);
// function solution(X) {
//     // write your code in JavaScript (Node.js 6.4.0)
//     if (X == X - 1) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
// }
// solution(1);

// 2 = 2 - 2 = \\

// XMLList

// X%1

//==========

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    // zero-indexed array A of N int, largest int.
    // [1,2,3] = 3
    let greatest = 0;
    let arr = A;
    for (i = 0; i < arr.length; ++i) {
      if (greatest < arr[i]) {
        greatest = arr[i];
      }
    }
    return greatest;
}
let array = [1,2,20,22,5];
solution(array)

//======

function sum(A) {
  let arraySum = 0;
  let mappedArray = A.map((x) => {
    arraySum += x;
  })
  return arraySum;
}

let array = [1,2,3,4,2];
sum(array)

// function solution(A) {
//   for (i = 0; i > A.length; ++i) {
//     let add = A[i];

//       return add;

//   }
// }
// let array = [1,2,3,-1];
// solution(array);

// let solution = A.map(function(item) {
//   let inner = 0;
//   inner += inner + item;
//   return inner;


// let arrPlus = 0;
  //   arrPlus += item;
  // return arrPlus;
// for (i = 0; i > A.length; ++i) {
  //   let arrPlus = 0;
  //   arrPlus += A[i];
  //   return arrPlus
  // }
//   var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//   return x * 2;
// });
//   console.log(print);
// }




// =====

// var sum = [1, 2, 3].reduce((a, b) => a + b, 0);

function sum(x) {
  var addThemUp = x.reduce((a, b) => a + b, 0);
  return addThemUp;
}
let array = [1,2,3,4,-2,];
sum(array);


// function sum(x) {
//   let newX = x.reduce(add, 0);
//     return newX;
// }

//===
