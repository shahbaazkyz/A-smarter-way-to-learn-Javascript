var tableNumber = parseInt(prompt("Enter number for see the table "));
document.write("<h1> Table of  " + tableNumber + "</h1>");
var i = 1;

while (i <= 10) {
  document.write("<br>" + tableNumber + " x " + i + " = " + tableNumber * i);
  i++;
}
