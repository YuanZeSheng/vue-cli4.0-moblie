import Vue from 'vue'

//  0.888888 => 0.88
Vue.filter('toFixed3', function (num) {
  if (typeof num == 'number' || num == parseFloat(num)) {
      num = parseFloat(num);
      return parseFloat(num.toFixed(3));
  } else {
      return num;
  }
});


//  0.888888 => 0.8888
Vue.filter('toFixed4', function (num) {
  if (typeof num == 'number' || num == parseFloat(num)) {
      num = parseFloat(num);
      return parseFloat(num.toFixed(4));
  } else {
      return num;
  }
});