// from data.js
var tableData = data;

// YOUR CODE HERE!



// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

// function getData() {
//       var datetime = unpack(tableData, 0);
//       var city = unpack(tableData, 1);
//       var state = unpack(tableData, 2);
//       var country = unpack(tableData, 3);
//       var shape = unpack(tableData, 4);
//       var durationMinutes = unpack(tableData, 4);
//       var comments = unpack(tableData, 5);
//       buildTable(datetime, city, state, country, shape, durationMinutes, comments);
//     };

var submit = d3.select("#filter-btn");

submit.on("click", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime").node().value;
    
    console.log(inputElement);
    console.log(tableData);

    var filteredDate = tableData.filter(tableData => tableData.datetime == inputElement);
    console.log(filteredDate)
    
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    filteredDate.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
    
    // buildTable(filteredDate.datetime, filteredDate.city, filteredDate.state, filteredDate.country, filteredDate.shape, filteredDate.durationMinutes, filteredDate.comments)

});

// function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
//     var table = d3.select("#ufo-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < 12; i++) {
//       trow = tbody.append("tr");
//       trow.append("td").text(datetime[i]);
//       trow.append("td").text(city[i]);
//       trow.append("td").text(state[i]);
//       trow.append("td").text(country[i]);
//       trow.append("td").text(shape[i]);
//       trow.append("td").text(durationMinutes[i]);
//       trow.append("td").text(comments[i]);
//     }
//   }