// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");




tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  }); 
});




//function deleteRow() {
//var table = document.getElementById("ufo-table");
//while (table.rows.length > 0) {
//  table.deleteRow(1);
//     
//};
//};










var date = data;


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
   

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  var filteredData = date.filter(location => location.datetime === inputValue);

// document.getElementById("ufo-table").deleteRow(0);
    
// var table = document.getElementById("tbody");
//    while(table.rows.length > 0) {
//  table.deleteRow(0);
//};
//var table = document.getElementById('ufo-table');
//var row = document.getElementsByTagName('tbody')[0];
//
//
//    row.parentNode.removeChild(row);

//var table = document.getElementById("ufo-table");
//
//while (table.rows.length > 1) {
//  table.deleteRow(1);
//};
     tbody.html("");
  console.log(filteredData);
  var tableData = filteredData;
   tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});


});
