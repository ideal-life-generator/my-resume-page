// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// A version without promises

// export const asyncHandler = (string, successfulCallback, errorCallback, finallyCallback) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof string === "string") {
//         successfulCallback(string);
//       } else {
//         errorCallback(string);
//       }
//
//       finallyCallback();
//     }, 1000);
//   });

//   return promise;
// };

// asyncHandler(
//   "Hi",
//   () => {
//     console.log("resolved");
//   },
//   () => {
//     console.log("rejected");
//   }
// );

// ==================================

export const asyncHandler = (string) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof string === "string") {
        resolve(string);
      } else {
        reject(string);
      }
    }, 1000);
  });

  return promise;
};

// #1

// const promise = asyncHandler();

// promise.then(() => {
//   console.log("resolved");
// });

// promise.catch(() => {
//   console.log("rejected");
// });

// promise.finally(() => {
//   console.log("finally");
// });

// #2

// const promise = asyncHandler()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   }).finally(() => {
//     console.log("finally");
//   });

// #3

try {
  const response = await asyncHandler("a string");

  console.log(response);
} catch (error) {
  console.log("rejected");
} finally {
  console.log("finally");
}

// =====================================

// Handler multiple asynchronous handlers in order

// try {
//   const response1 = await asyncHandler("a string 1");

//   console.log(response1);

//   const response2 = await asyncHandler("a string 2");

//   console.log(response2);

//   const response3 = await asyncHandler("a string 3");

//   console.log(response3);

//   const response4 = await asyncHandler("a string 4");

//   console.log(response4);

//   const response5 = await asyncHandler("a string 5");

//   console.log(response5);
// } catch (error) {
//   console.log("rejected");
// } finally {
//   console.log("finally");
// }

// Handler multiple asynchronous handlers simultaneously with

// try {
//   const responses = await Promise.all([
//     asyncHandler("a string 1"),
//     asyncHandler("a string 2"),
//     asyncHandler("a string 3"),
//     asyncHandler("a string 4"),
//     asyncHandler("a string 5"),
//   ]);

//   console.log(responses);
// } catch (error) {
//   console.log("rejected");
// } finally {
//   console.log("finally");
// }
