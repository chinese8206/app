var  arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, arr) {
     //输出的是第一项的值或上一次叠加的结果，正在被处理的元素，正在被处理的元素的索引值
     console.log(prev, cur);  
     return prev + cur;
})
console.log(arr, sum)
