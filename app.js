

var counter = 0;

function add() {
  var h1 = document.getElementById("h1");
  //  console.log(h1.innerHTML);
  counter++;
  h1.innerHTML = counter;
}

function sub() {
  var h1 = document.getElementById("h1");
  //  console.log(h1.innerHTML);++++++

  if (h1.innerHTML > 0) {
    counter--;
    h1.innerHTML = counter;
  }
}

function reset() {
  var h1 = document.getElementById("h1");
  h1.innerHTML = 0;
}
