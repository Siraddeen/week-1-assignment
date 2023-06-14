function calculateTime(n) {
    var tim = 0;
    for(var i=0;i<=n;i++){
        tim +=i
    }
    return tim;
}                                        // without date module
console.log(calculateTime(100))


///                     Or



// function calculateSumTime(n) {
//   const startTime = Date.now();    
    
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
       
//     const endTime = Date.now();
//     const timeInSeconds = (endTime - startTime) / 1000;
    
//     return sum || timeInSeconds;
//   }
  
//   const n = 10;
//   const timeTaken = calculateSumTime(n);                   // with date & time module 
  
//   console.log(`Time taken to calculate the sum from 1 to ${n}: ${timeTaken} seconds`);
//   console.log(calculateSumTime(10))