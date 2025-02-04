//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
var arrN = [3, 7, 22, 66, 9.7, 997, 98, 777, 6667, 779];
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre
var book1 = {
    title: 'Механічне піаніно',
    pageCount: 250,
    genre: 'антиутопія'
};
var book2 = {
    title: 'Тореадори з Васюківки',
    pageCount: 350,
    genre: 'пригодницький'
};
var book3 = {
    title: 'Таємничий острів',
    pageCount: 520,
    genre: 'науково-фантастичний пригодницький роман'
};
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
var book4 = {
    title: 'Механічне піаніно',
    pageCount: 250,
    genre: 'антиутопія',
    authors: ['Курт Воннегут', 84]
};
var book5 = {
    title: 'Тореадори з Васюківки',
    pageCount: 350,
    genre: 'пригодницький',
    authors: ['Всеволод Нестайко', 84]
};
var book6 = {
    title: 'Таємничий острів',
    pageCount: 520,
    genre: 'науково-фантастичний пригодницький роман',
    authors: ['Жуль Верн', 77]
};
var book7 = {
    title: '1984',
    pageCount: 520,
    genre: 'антиутопія',
    authors: ['Джордж Орвелл', 46]
};
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
var user1 = {
    name: 'Alex',
    username: 'Alex1990',
    password: 7771990
};
var user2 = {
    name: 'Nikita',
    username: 'Nik',
    password: 726476
};
var user3 = {
    name: 'Oleg',
    username: 'Ole-ole',
    password: 348097832
};
var user4 = {
    name: 'Andriy',
    username: 'Andriy1999',
    password: 3444443773
};
var user5 = {
    name: 'Artem',
    username: 'Tim3345',
    password: 88899990
};
var user6 = {
    name: 'Ivan',
    username: 'IvanPob777',
    password: 435345453
};
var user7 = {
    name: 'Jek',
    username: 'Jek434',
    password: 333332222
};
var user8 = {
    name: 'Vitaliy',
    username: 'Vital666',
    password: 6666131313
};
var user9 = {
    name: 'Olena',
    username: 'Olena1996',
    password: 171719
};
var user10 = {
    name: 'Anton',
    username: 'Anton555',
    password: 6445354343
};
var arrUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
var arrTemperature;
var arrMonday;
var arrTuesday;
var arrWednesday;
var arrThursday;
var arrFriday;
var arrSaturday;
var arrSunday;
arrTemperature = [
    arrMonday = [15, 22, 18],
    arrTuesday = [12, 19, 13],
    arrWednesday = [19, 20, 9],
    arrThursday = [7, 14, 19],
    arrFriday = [4, 12, 8],
    arrSaturday = [14, 25, 17],
    arrSunday = [12, 23, 14],
];
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["MORNING"] = "morning";
    TimeOfDay["AFTERNOON"] = "afternoon";
    TimeOfDay["EVENING"] = "evening";
})(TimeOfDay || (TimeOfDay = {}));
var weekTemperature = [{ day: [{ value: 17, type: TimeOfDay.MORNING }, { value: 17, type: TimeOfDay.AFTERNOON }, { value: 17, type: TimeOfDay.EVENING }] }];
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
var x;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time;
if (time >= 0 && time <= 15) {
    console.log('Перша частина години');
}
else if (time > 15 && time <= 30) {
    console.log('Друга частина години');
}
else if (time > 30 && time <= 45) {
    console.log('Третя частина години');
}
else if (time > 45 && time < 60) {
    console.log('Четверта частина години');
}
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
var day;
if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
}
else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
}
else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
}
//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var dayOfWeek = prompt('Введіть число від 1 до 7');
switch (dayOfWeek) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
}
//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
var number1 = 3;
var number2 = 3;
if (number1 > number2) {
    console.log(number1);
}
else if (number1 < number2) {
    console.log(number2);
}
else if (number1 === number2) {
    console.log('Числа рівні');
}
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//замінив зміну х на змінну у так як вже маю в цьому файлі змінну з назвою х
var y;
if (y === 0 || y === null || y === undefined) {
    console.log(y = 'default');
}
//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
var course = coursesAndDurationArray[0];
if (course.monthDuration > 5) {
    console.log('Супер');
}
