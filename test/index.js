// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
// getDays( 2021 , 4)  //30
// getDays( 2021 , ‘April’)  //30

function getDays(year, month) {

    if ((year, month) === undefined) {
        return 'Error';
    }

    var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var str = {
        January: arr[0],
        February: arr[1],
        March: arr[2],
        April: arr[3],
        May: arr[4],
        June: arr[5],
        July: arr[6],
        August: arr[7],
        September: arr[8],
        October: arr[9],
        November: arr[10],
        December: arr[11],
    };

    if ((year % 4 === 0) || (year % 100 == 0 && year % 400 === 0) && (month === 2 || month === 'February')) {
        return 28;
    }
    if (typeof month === 'number') {
        return arr[month - 1];
    }
    return str[month];
}

console.log(getDays(2021, 4));  //30
console.log(getDays(2021, 'April')); //30

// 2) Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное. 

Number.prototype.isOdd = function consider() {
    return this % 2 !== 0 ? true : false;
 };
 
 var even = 2;
 var odd = 1;

 console.log(even.isOdd());
 console.log(odd.isOdd());

 
// 3) Написать функцию every, которая будет принимать первым аргументом массив, а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false). Результатом функции должно быть логическое выражение true/false  в зависимости от того, выполняется ли условие для каждого из элементов.

// Example:
// every([8, 2, 4], function (num){
// 	return  num%2===0
// })  // true

function getEven(num) {
    return num % 2 === 0;
}
  
function every(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        return false;
      }
    }
    return true;
}
  
console.log(every([8, 2, 4], getEven));


module.exports = {getDays, isOdd:Number.prototype.isOdd, getEven, every}