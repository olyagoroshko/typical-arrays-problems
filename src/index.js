
exports.min = function min (array) {
  let i = 0;
  if(array == null || array.length == 0){
    return 0;
  } else {
    let sortArr = array.sort(function(a, b) {
      return a - b;
    });
    return sortArr[i];
  }
};

exports.max = function max (array) {
  let i = 0;
  if(array == null || array.length == 0){
    return 0;
  } else {
    let sortArr = array.sort(function(a, b) {
      return a - b;
    }).reverse();
    return sortArr[i];
  }
}

exports.avg = function avg (array) {
  if(array == null || array.length == 0){
    return 0;
  } else {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum+=array[i];
    }
    return sum/array.length;
  }
}
