/* Task #1
Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет"*/
/*function sayHello(greeting) {
    document.write(greeting);
  }
  
  sayHello("Hello, ");
  sayHello("John Dawson ");
  sayHello("30 years old");


/* Task #2
Напишите функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке*/
/*function day(dayWeek) {
  if (dayWeek == 1)
    document.write(`Monday`);
  if (dayWeek == 2)
    document.write(`Tuesday`);
  if (dayWeek == 3)
    document.write(`Wednesday`);
  if (dayWeek == 4)
    document.write(`Thursday`);
  if (dayWeek == 5)
    document.write(`Friday`);
  if (dayWeek == 6)
    document.write(`Saturday`);
  if (dayWeek == 7)
    document.write(`Sunday`);
}
day(5)

/* Task #3
Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/
/*let date = new Date ();
let hour = date.getHours();
if (hour>=5 && hour<12) greeting = "Good morning, Peri"; else {
if (hour>=12 && hour<18) greeting = "Good afternoon, Peri"; else {
if (hour>=18 && hour<24) greeting = "Good evening, Peri"; else {
if (hour>=0 && hour<5) greeting = "Good night, Peri";
}
}
}
alert(greeting);

/* HW #1
function chekNumber(num) {
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return -1;
  } else {
    return 1;
  }
}
document.write(chekNumber(-2));
/*Напишите функцию, которая принимает в качестве параметра целое число и возвращает: 
-1 если число отрицательное
0 если число 0
1 если число положительное*/
/*let num = 10;
if (num === 0) check = 0; else {
if (num >= 1) check = 1; else {
if (num <= -1) check = -1;
}
}
alert(check);

/* Hw #2
function center(s, w) {
  if (w <= s.length) {
    return s;
  }

  let spaces = Math.floor((w - s.length) / 2);

  let result = "-".repeat(spaces) + s + "-".repeat(spaces);

  return result;
}
document.write(center("hello", 50));

/*Напишите функцию, которая будет принимать в качестве параметров
строку s, а также ширину окна в символах – w. Возвращать функция долж-
на новую строку, в которой в начале и в конце добавлено необходимое количество
знака -, чтобы первоначальная строка оказалась размещена по цент-
ру заданного окна а по бокам строки добавлены знаки *.
Новая строка должна формироваться по следующему принципу:
- если длина исходной строки s больше или равна ширине заданного
окна, возвращаем ее в неизменном виде;
- в противном случае должна быть возвращена строка следующего вида: (функцию передана строка "hi", ширина 20)
вывод: --------hi----------*/



