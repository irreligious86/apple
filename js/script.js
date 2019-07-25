
var ul = document.querySelector('.menu');       // получение элемента через класс и присвоение его в переменную
var li = ul.children;                           // получение дочерних элементов в виде псевдомассива и присвоение в переменную
ul.appendChild(li[1]);                          // добавление в псевдоэлемент уже существующего потомка , с целью перемещения в конец
ul.appendChild(li[2]);                          // добавление в псевдоэлемент уже существующего потомка , с целью перемещения в конец

//***********   ПЯТЫЙ ЭЛЕМЕНТ
function sortArgs() {
    let args = [];
    for (let i = 0; i < li.length; i++)
        args[i] = li[i];
    return args.sort();
}
const a = sortArgs();
var newLi = document.createElement('li');
newLi.innerHTML = 'Пятый пункт';
newLi.classList.add('menu-item');
ul.appendChild(newLi);

//**********   ВЫВОД НА КОНСОЛЬ 
for ( var i = 0 ; i < ul.length ; i++) {
    console.log(ul[i]); }

//**********  ЗАМЕНА БЭКГРАУНДА
  document.body.style.backgroundImage = ('url(https://cdn-images-1.medium.com/max/1920/1*RmZCUJpG9eTMRAl-w85L-A.jpeg)') ;

//**********   УДАЛЕНИЕ РЕКЛАМЫ
  const adv = document.querySelector('.adv');
  const column = document.querySelectorAll('.column');
  column[1].removeChild(adv);

//**********   ПРОМПТ
  const promptDiv = document.querySelector('.prompt');
  let userInner = prompt('Поделитесь Вашим мнением о технике Apple!', 'Ответ');
  promptDiv.innerHTML = userInner;
  console.log(promptDiv);

//*********   ИЗМЕНЕНИЕ В ТЕКСТЕ TITLE
document.getElementById('title').innerHTML = ('Мы продаем только подлинную технику APPLE!');