
// This times out - not good

// var mySqrt = function(x) {
//   let l = 0;
//   let r = x;
  
//   while(l <= r) {
//     const mid = Math.floor((l + r) / 2);
    
//     if (mid**2 === x) {
//       return mid;
//     } else if (mid**2 > x) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
  
//   return r;
// };

// This is faster
var mySqrt = function(x) {
    let y = Math.sqrt(x);
    return (y % 1 == 0 ? y : Math.floor(y));
};