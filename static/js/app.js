// Use the D3 library to read in samples.json from the URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it.  Various conslole.log statements to dig into the file structure.
d3.json(url).then(function(data) {
  console.log(data);
  console.log(data.names);
  console.log(data.samples[0]);
  console.log("------------");
  console.log(data.samples[0].id);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  // Create empty arrays for creating chart
  otu_id = []
  otu_labels = []
  sample_values = []

  // This function accepts a parameter and iterates through an array to push the top 10
  let patient = data.samples[0];
    console.log(patient.id)
  
    function arrayLoop(_patient) {
      for (let j = 0; j <10; j++) {
        otu_id.push(patient.otu_ids[j]);
        otu_labels.push(patient.otu_labels[j]);
        sample_values.push(patient.sample_values[j]);
        console.log(otu_id);
      }
    }
    // Execute the function
    arrayLoop(patient);




});






// // Display the default plot
// function init() {
//   let plotdata = [{
//     x: patient1[1],
//     y: patient1[2],
//     labels: patient1[3],
//     // y: data.samples[2].sample_values,
//     // x: data.samples[2].otu_ids,
//     // labels: data.samples[2].otu_labels,
//     type: "bar",
//     // orientation: "h"
//   }];

//   Plotly.newPlot("bar", plotdata);
// }

// // organize the data
// // Sort the data by Greek search results descending
// let sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// // Slice the first 10 objects for plotting
// slicedData = sortedByGreekSearch.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();



// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);
// // should just be select

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   let data = [];

//   if (dataset == 'australia') {
//       data = australia;
//   }
//   else if (dataset == 'brazil') {
//       data = brazil;
//   }
//   else if (dataset == 'uk') {
//       data = uk;
//   }
//   else if (dataset == 'mexico') {
//     data = mexico;
//   }
//   else if (dataset == 'singapore') {
//       data = singapore;
//   }
//   else if (dataset == 'southAfrica') {
//     data = southAfrica;
//   }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();

