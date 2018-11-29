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


//   BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
//  var ages = filteredData.map(person => person.age);
//
//  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//  var mean = math.mean(ages);
//  var median = math.median(ages);
//  var mode = math.mode(ages);
//  var variance = math.var(ages);
//  var standardDeviation = math.std(ages);
//
//  // Finally, add the summary stats to the `ul` tag
//  d3.select(".summary")
//    .append("li").text(`Mean: ${mean}`)
//    .append("li").text(`Median: ${median}`)
//    .append("li").text(`Mode: ${mode}`)
//    .append("li").text(`Variance: ${variance}`)
//    .append("li").text(`Standard Deviation: ${standardDeviation}`);
});
