// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


//creazione  alert con 5 numeri casuali + array num
var randomNumbers = [];
while (randomNumbers.length <5) {
  var cpuNums = getRandom(1, 50);
  if(randomNumbers.includes(cpuNums) == false) {
    randomNumbers.push(cpuNums);
  }
}
console.log(randomNumbers);
//alert all'utente con i 5 numeri casuali
alert('Memorizza questi numeri' +' '+ randomNumbers);


//creazione numeri random
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}

// timer
         var time = 30
         var countDown = setInterval(function() {

          time--;


          $('#timer').text(time);


          if(time <= 0) {

              clearInterval(countDown);
          }
        }, 1000);


          var numbersFind = [];
          setTimeout (function() {
          var numbersOk =[];
          for(var i = 0; i < 5; i++) {
           var numberUser = parseInt(prompt('inserisci il numero che ricordi ' + (i + 1)));

           if(randomNumbers.includes(numberUser)) {
             numbersFind.push(numberUser)
           }
          }
          console.log(numbersFind);
          
          alert(numbersFind + ' '+ 'hai indovinato' + ' '+ numbersFind.length + ' '+ 'numeri');
          }, 30000)
