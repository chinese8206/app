var  arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, arr) {
     console.log(prev, cur);  
     return prev + cur;
})
console.log(arr, sum)
