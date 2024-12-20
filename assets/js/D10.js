/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A")
let sum = 10 + 20

console.log(sum)
console.log("*************************************************************************************")
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B")
let random = Math.floor(Math.random() * 21)

console.log(random)
console.log("*************************************************************************************")
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C")
let me = {
  name: "Fabio",
  surname: "Bertolino",
  age: 27
}

console.log(me)
console.log("*************************************************************************************")
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D")
delete me.age

console.log(me)
console.log("*************************************************************************************")
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E")
me.skills = ["HTML", "CSS", "JavaScript"]

console.log(me)
console.log("*************************************************************************************")
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F")
me.skills.push("Angular")

console.log(me.skills)
console.log("*************************************************************************************")
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G")
me.skills.pop()

console.log(me.skills)
console.log("*************************************************************************************")
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1")
const dice = () => {
  return Math.ceil(Math.random() * 7)
}

console.log(dice())
console.log("*************************************************************************************")
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2")
const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1
  }
  return num2
}

console.log(whoIsBigger(8, 2))
console.log("*************************************************************************************")
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3")
const splitMe = (str) => {
  let splitStr = str.split(" ")
  return splitStr
}



// Si devono aggiungere lettere iniziali maiuscole???



let stringa = "I love chocolate"
console.log(splitMe(stringa))
console.log("*************************************************************************************")
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4")
const deleteOne = (str, bool) => {
  if (bool === true) {
  return str.slice(1)
}
return str.slice(0, -1)
}

console.log(deleteOne("Cancellami", false))
console.log("*************************************************************************************")
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5")
/*
const onlyLetters = (str) => {
  let numbered = str
  let noNumbers = ""
  for (let char of numbered) {
    if (isNaN(char)) {
      noNumbers += char
    }
  }
  return noNumbers
}
SOLUZ MIA, NO SPAZI...*/

const onlyLetters = (str) => {
const stringWithNumbers = str;
const stringWithoutNumbers = stringWithNumbers.replace(/\d+/g,'');
return stringWithoutNumbers
}

console.log(onlyLetters("I have 50 cats"))
console.log("*************************************************************************************")
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6")
const isThisAnEmail = (str) => {
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  if(!regexEmail.test(str)) { 
    return "Not at all"
  }
  return "true"
}

console.log(isThisAnEmail("fabiobertix97@gmail.com"))
console.log(isThisAnEmail("rauwfiwuefgiwefiu"))
console.log("*************************************************************************************")
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7")
const whatDayIsIt = () => {
  let completeDate = new Date()
  let today = completeDate.getDay()
  switch (today) {
    case 1:
        return "Lunedì"
        
    case 2:
        return "Martedì"
        
    case 3:
        return "Mercoledì"
        
    case 4:
        return "Giovedì"
        
    case 5:
        return "Venerdì"
        
    case 6:
        return "Sabato"
        
    case 7:
        return "Domenica"
        
    default:
        
  }
}

console.log(whatDayIsIt())
console.log("*************************************************************************************")
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8")
const rollTheDices = (num) => {
  let values = []
  for (i = 0; i < num; i++) {
    values.push(dice())
  }
  let sum = values.reduce((acc, curr) => acc + curr)
  let ritorna = {values, sum}
  return ritorna
}

console.log(rollTheDices(4))
console.log("*************************************************************************************")
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9")
const howManyDays = (data) => {
  let today = new Date()
  let date =  new Date(data)
  const tsDifference = today - date.getTime();
    return Math.floor(tsDifference / (1000 * 60 * 60 * 24));
}

console.log(howManyDays("2004-11-13"))
console.log("*************************************************************************************")
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10")
const isTodayMyBirthday = (data) => {
  const firstDate = new Date('1997-12-05');
  const secondDate = new Date(data);

  const firstMonth = firstDate.getMonth();
  const firstDay = firstDate.getDate();
  const secondMonth = secondDate.getMonth();
  const secondDay = secondDate.getDate();

  if (firstDay === secondDay && firstMonth === secondMonth) {
    result = true
    return result
  }
  result = false
  return result
}
  
  console.log(isTodayMyBirthday('2024-12-05'))
  console.log(isTodayMyBirthday('2024-12-13'))
console.log("*************************************************************************************")
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11")
  const deleteProp = (obj, str) => {
    let object = {...obj}
    delete object[str]
    return object
  }
   
  console.log(deleteProp(me, "name"))
console.log("*************************************************************************************")




const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* 
Mi scuso per la trasgressione! Per via di diversi errori (penso relativi al concetto di hoisting e al fatto che l'array 
fosse stato inizializzato solo al fondo) ho deciso di spostare l'oggetto qui.
Ammetto di non essere ferrato nell'argomento, ho provato per più di un ora a cerare una soluzione alternativa ma non ho trovato risultati funzionanti...
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12")
function newestMovie (array) {
  let newMovie = { Year: 100 }
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (currentYear > newMovie.Year) {
      newMovie = movie
    }
  })

  return newMovie
}

console.log(newestMovie(movies))
console.log("*************************************************************************************")
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13")
const countMovies = (array) => {
  return array.length
}

console.log(countMovies(movies))
console.log("*************************************************************************************")
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14")
const onlyTheYears = (array) => {
  return array.map((elem) => elem.Year)
}

console.log(onlyTheYears(movies))
console.log("*************************************************************************************")
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15")
const onlyInlastMillennium = (array) => {
  return array.filter((movie) => {
    return parseInt(movie.Year) < 1999
  })
}

console.log(onlyInlastMillennium(movies))
console.log("*************************************************************************************")
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16")
const sumAllTheYears = (array) => {
  return array.reduce((tot, curr) => tot + parseInt(curr.Year), 0)
}

console.log(sumAllTheYears(movies))
console.log("*************************************************************************************")
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17")
const searchByTitle = (str) => {

}

console.log(searchByTitle(movies, 'The Avengers'))
console.log("*************************************************************************************")
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18")

console.log("*************************************************************************************")
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19")

console.log("*************************************************************************************")
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20")
const searchContainer = () => {
  let container = document.querySelector('#container')
  return container
}

searchContainer()
console.log("*************************************************************************************")
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21")
const selectTdAll = () => {
  let allTd = document.querySelectorAll('td')
  return allTd
}

selectTdAll()
console.log("*************************************************************************************")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22")
const stampTd = () => {
  let tdText = document.querySelectorAll('td')
  for (i = 0; i < tdText.length; i++) {
    return console.log(tdText[i])
  }
}

stampTd()
console.log("*************************************************************************************")
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23")
const redLink = () => {
  let allLinks = document.querySelectorAll('a')
  for (i = 0; i < allLinks.length; i++) {
    allLinks[i].style.background = 'red'
  }
}

redLink()
console.log("*************************************************************************************")
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24")
const addLi = () => {
  let list = document.querySelector('#myList')
  let li = document.createElement('li')
  li.innerText = "sample" //necessario?
  list.appendChild(li)
}

addLi()
console.log("*************************************************************************************")
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25")
const removeAll = () => {
  let list = document.querySelectorAll('#myList li')
  list.remove()
}

removeAll()
console.log("*************************************************************************************")
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26")
const addTest = () => {
  const tr = document.querySelectorAll('tr')
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add('myHeading')
  }
}

addTest()
console.log("*************************************************************************************")
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27")

console.log("*************************************************************************************")
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28")

console.log("*************************************************************************************")
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29")

console.log("*************************************************************************************")
/* Questo array viene usato per gli esercizi. Non modificarlo. */

