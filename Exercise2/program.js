var arr = process.argv;
var sum = 0;
for (var i = 2, l = arr.length; i < l; i++) {
  sum += Number(arr[i]);
}
console.log(sum);

