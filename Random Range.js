
//Get minimum random range
var minny = window.prompt("Please give minimum number: ");
//Get maximum random range
var maxy = window.prompt("Please give max number: ");

function randomNumberRange(min, max)
{
  var difference = max-min;
  return difference<=0 ? console.log("Please choose better numbers"):console.log(Math.floor(Math.random()*difference)+min);

  
  //if(difference<=0)
  //  return console.log("Please choose better numbers");
  //else
  //return console.log(Math.floor(Math.random()*difference)+min);


}

if(minny==undefined||maxy==undefined)
{
  console.log("Please enter some numbers.");
}
else
randomNumberRange(parseInt(minny), parseInt(maxy));
