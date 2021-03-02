
// prompts user for their order
var hotdogs = prompt("Welcome to Joe's Hotdogs! How many hotdogs do you want? ($3.25 ea)");
var french_fries = prompt("How many french fries do you want to order? ($2.00 ea)");
var drinks = prompt("How many drinks do you want to order? ($1.50 ea)");

//console log to make sure the numbers are correct
console.log(hotdogs);
console.log(french_fries);
console.log(drinks);

//var values
let cost_hotdog = 3.25;
let cost_fries = 2.00;
let cost_drink = 1.5;
let tax = 0.0625;
let discount = 0.10;
let total = 0.00;
let cost2 = 0.00;
//calculate the cost and apply discount if total cost before tax is over $20.00
function calculate_total(){
 
    let cost = (hotdogs * cost_hotdog) + (french_fries * cost_fries) + (drinks * cost_drink);
    cost = cost.toFixed(2);
    cost2 = cost;
    console.log(cost2);
    if(cost > 20.00){
        
        discount = cost * discount;
        discount = discount.toFixed(2);
        cost = cost - discount;
        tax = cost * tax;
        tax = tax.toFixed(2);
        console.log(tax)
        total = Number(cost) + Number(tax);
        total = total.toFixed(2)
    }else{
        tax = cost * tax;
        tax = tax.toFixed(2);
        discount = 0.00;
        total = Number(cost) + Number(tax);
        console.log(total)
        total = total.toFixed(2);
    }
    return total, tax, discount, cost2;
}
calculate_total(total,discount,tax);
//table information
var tableArray = [
            ['Items', 'Quantity/Cost'],
            ['Hot Dogs', hotdogs],
            ['French Fries', french_fries],
            ['Drinks', drinks],
            ['Cost Before Tax ($)' , cost2],
            ['Discount ($)',discount],
            ['Tax After Discount($)', tax],
            ['Total ($)', total]
        ];


//creating the table 2 by 2
var myTableDiv = document.getElementById("myTable");

var table = document.createElement('TABLE');
table.setAttribute('border','2');
table.setAttribute('width','100%')

var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

for (var i = 0; i < 8; i++) {
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

  for (var j = 0; j < 2; j++) {
    var td = document.createElement('TD');
    td.appendChild(document.createTextNode(tableArray[i][j]));
    tr.appendChild(td);
  }
}
myTableDiv.appendChild(table);


