// You don't know JS (this and object)
// default binding
b = "money";
function a() {
  console.log(this.b);
}
a();
// implicit binding

function c() {
  this.b = "ddd";
  a();
}
c(); //b ddd

let e = {
  b: "eee",
  a,
};

e.a();

console.log(global.b); // reference alias

// explicit binding
//
a.call({ b: "I am explicitly used" });
a.call({ b: "another value of b" });
a.call(e, 1, 2, 3);
a.apply({ b: "ds" }, [1, 2, 3]);

// Everything in javascript is an object
// every object will have a method
//(3).add(1) (4).add(1) // 5 3 + 1 =>  3.add(3)
let d = 3;
console.log((3).toFixed(2));

const add = (a, b) => a + b;

function methodize(that) {
  let y = that;
  return function (func) {
    return func.call(y, a);
  };
}

Number.prototype.me = (number) => number;

console.log((3).me(42));

// hard binding

// function recursion(index, inputArray, outputArray) {
//   if (index >= inputArray.length) return;

//   if (Array.isArray(inputArray[index])) {
//     recursion(0, inputArray[index], outputArray);
//   } else {
//     outputArray.push(inputArray[index]);
//   }

//   recursion(index + 1, inputArray, outputArray);
// }

const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 7,
          children: [{ val: 2 }, { val: 18 }, { val: 12 }],
        },
      ],
    },
    {
      val: 4,
      children: [
        { val: 5 },
        {
          val: 6,
          children: [{ val: 12 }, { val: 11 }, { val: 10 }, { val: 9 }],
        },
        { val: 13 },
      ],
    },
    {
      val: 3,
      children: [{ val: 15 }],
    },
    {
      val: 17,
      children: [
        { val: 16 },
        {
          val: 2,
          children: [
            { val: 14 },
            { val: 11 },
            {
              val: 18,
              children: [{ val: 4 }, { val: 11 }, { val: 7 }],
            },
            { val: 27 },
            { val: 18 },
            { val: 29 },
          ],
        },
      ],
    },
  ],
};

const expected = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 7,
          children: [
            { val: 18 }, // <-- this moved up
            { val: 2 },
            { val: 12 },
          ],
        },
      ],
    },
    {
      val: 17, // <-- this moved up
      children: [
        {
          val: 2, // <-- this moved up
          children: [
            {
              val: 18, // <-- this moved up
              children: [{ val: 4 }, { val: 11 }, { val: 7 }],
            },
            { val: 18 }, // <-- this moved up
            { val: 14 },
            { val: 11 },
            { val: 27 },
            { val: 29 },
          ],
        },
        { val: 16 },
      ],
    },
    {
      val: 4,
      children: [
        { val: 5 },
        {
          val: 6,
          children: [{ val: 12 }, { val: 11 }, { val: 10 }, { val: 9 }],
        },
        { val: 13 },
      ],
    },
    {
      val: 3,
      children: [{ val: 15 }],
    },
  ],
};

function sortTheIndex(index, outputArray, inputArray) {
  const firstIndex = inputArray[0];
  const targetIndex = inputArray[index];
  inputArray[0] = targetIndex;
  inputArray[index] = firstIndex;
  outputArray = inputArray;
}
let ind = 0;
function recursion2(index, inputArray, outputArray, original, number) {
  if (index >= inputArray.length) return;
  if (Array.isArray(inputArray[index])) {
    ind++;
    recursion2(0, inputArray[index], outputArray, original, number);
  } else {
    if (inputArray[index] == number) {
      console.log();
      const firstIndex = original[0];
      const targetIndex = original[index];
      original[0] = targetIndex;
      original[index] = firstIndex;
      outputArray.push(original);
    }
  }

  recursion2(index + 1, inputArray, outputArray, original, number);
}

// function flattenArray(inputArray) {
//   let outputArray = [];
//   let original = inputArray;
//   recursion(0, inputArray, outputArray, original);
//   return outputArray;
// }

function flattenArray2(inputArray, number) {
  let outputArray = [];
  let original = inputArray;
  recursion2(0, inputArray, outputArray, original, number);
  return outputArray;
}
console.log(flattenArray2([1, 2, 3, [{ val: "1", e: 04 }, 5, 6, 7]], 7));
