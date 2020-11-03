// 1 урок
//расчет температуры
// var Tc = +prompt("Укажите температуру в градусах по Цельсию:");
// var Tf = (9/5)*Tc+32;
// alert("Температура по Фаренгейту равна "+Tf+" градусов");

// //работа с переменными

// var name = "Василий";
// var admin = name;
// alert(admin);

// // дополнительное задание

// alert("Специальные атрибуты async и defer используются для того, чтобы пока грузится внешний скрипт – браузер показал остальную (следующую за ним) часть страницы. Без них этого не происходит.\nРазница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет. Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет.\n");
// alert("Атрибуты async/defer работают только в том случае, если назначены на внешние скрипты, т.е. имеющие src.\nПри одновременном указании async и defer в современных браузерах будет использован только async, в IE9- – только defer (не понимает async).");

// var a = 1000 + "108";
// alert(a);

// 2 урок
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);    
// alert(a);                    // 2
// alert(b);        // 2
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b); // 3


// // 2 задание
// var a = 2;
// var x = 1 + (a *= 2);
// alert("Во втором задании x=" +x);

// //3 задание
// var a=+prompt("Третье задание. Введите любое целое число");
// var b=+prompt("Введите еще одно произвольное целое число");

// //проверка с помощью if...else
// if(a>=0){
//     if(b>=0)
//         alert(a-b);
//         else
//         alert(a+b);   
// }
// else if(b>=0)
// alert(a+b);
// else
// alert(a*b);


// // проверка с помощью тернарного оператора
// (a>=0&&b>=0)?(alert(a-b)):((a<0&&b<0)?alert(a*b):alert(a+b));


// // 4 задание

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
  
//  var a = getRandomInt(0, 15);
//  alert("Четвертое задание. a = " +a);


//  function getNumbers(a){
//     var current = a;
//     var a_string = current + " ";
//   switch(15-a){
//        case 0:
//         return a_string;
//       default:
//           a_string +=getNumbers(++a);
//           return a_string;
//   }
// }
//   alert("Числовой ряд: " +getNumbers(a));

  // 5е задание
  var arg1= +prompt("Пятое задание. Введите первый аргумент:");
  var arg2= +prompt("Введите второй аргумент:");

  function mathSum(arg1, arg2) {
  
      return arg1+arg2;

  }

 alert("Сумма аргументов: " + mathSum(arg1, arg2));

  function mathRazn(arg1, arg2) {
    return arg1-arg2;

}

 alert("Разность аргументов: " + mathRazn(arg1, arg2));

 function mathUmn(arg1, arg2) {
    return arg1*arg2;

}

 alert("Произведение аргументов: " + mathUmn(arg1, arg2));

 function mathDel(arg1, arg2) {
    return arg1/arg2;

}

 alert("Деление аргументов: " + mathDel(arg1, arg2));
    
