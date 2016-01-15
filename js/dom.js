/*
Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/


var allPrices = document.getElementsByTagName('option');
console.log(allPrices);

function getAllPrices() {
  var allPriceArray = [];
  for (var i = 0; i < allPrices.length; i++) {
    var currPrice = allPrices[i];
    var val = currPrice.getAttribute("value");
    allPriceArray.push(parseFloat(val));
  } 

  console.log(allPriceArray);
  return allPriceArray;
}


function getSelectedPrices(){
  var selectPrices = [];
  for ( var i = 0; i < allPrices.length; i++) {
    var optionArr = document.getElementsByTagName('option');
    if (optionArr[i].selected){
      var val = optionArr[i].getAttribute("value");
      selectPrices.push(parseFloat(val));
    }
  }
  console.log(selectPrices);
  return selectPrices;
}


var sumAll = document.getElementById('sum-all');
sumAll.addEventListener('click', function(){
  var total = sumPrices(getAllPrices());
  console.log('heres a total: ' + total);
  var ul = document.getElementById('responses');
  var li = document.createElement('li');
  li.innerText = total;
  console.log(li);
  console.log(ul);
  ul.appendChild(li);
});

var countSelected = document.getElementById('count-selected');
countSelected.addEventListener('click', function(){
  var count = countSelPrices(getSelectedPrices());
  var ul = document.getElementById('responses');
  var li = document.createElement('li');
  li.innerText = count;
  console.log(li);
  console.log(ul);
  ul.appendChild(li);
});

// var  sumSelected = document.getElementById('sum-selected');
// sumSelected.addEventListener('click', sumPrices );

// var averageAll = document.getElementById('average-all');
// averageAll.addEventListener('click', averagePrices );

// var averageSelected = document.getElementById('average-selected');
// averageSelected.addEventListener('click', averagePrices ); //<< Not sure if this will work out


  