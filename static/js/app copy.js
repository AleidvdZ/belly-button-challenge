// Use the D3 library to read in samples.json from the URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it.  Various conslole.log statements to dig into the file structure.
d3.json(url).then(function(data) {
  console.log(data);
  console.log(data.names)
  console.log(data.samples[0]);
  console.log("------------");
  console.log(data.samples[0].id);
  console.log("------------");
  console.log(data.names[1]);
  console.log("------------");

// // Testing variables
//   let patient_id = data.name;
//     function arrayLoop(_patient_id) {
//       for (let a = 0; a < 10; a++){
//       console.log(patient.id);
//       console.log("xxxxxxxxxxxx");
//       }
//     }

//    // Execute the function
//    arrayLoop(patient_id); 

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
      }
      console.log(otu_id);
      console.log(otu_labels);
      console.log(sample_values);
    }
    // Execute the function
    arrayLoop(patient);

    //Display the default plot
    init();
   
    function init() {
      let plotdata = [{
        y: otu_id,
        x: sample_values,
        text: otu_labels,
        type: "bar",
        orientation: "h",
        yaxis: {title: {text: "OTU number"}},
        width: 0.8
    }];

    Plotly.newPlot("bar", plotdata);
  
  };

    // Create a Bubble Chart
    var trace1 = {
    x: otu_id,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
  //   marker: {
  //   size: 
  // }
  };

  var bubbledata = [trace1];

  var layout = {
  title: "OTU Bubble Plot",
  xaxis: {title: {text:"OTU number"}},
  showlegend: false,
  height: 300,
  width: 600
  };

  Plotly.newPlot('bubble', bubbledata, layout);





});



// from tutoring
// // Use the D3 library to read in samples.json from the URL.
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// function buildPanel(params) {
//   console.log(params);
  

//   //let panel = d3.select('sample-metadata')
//   // let metapanel = d3.select("#sample-metadata");
  
//   // let metainfo = data.metadata.id;
//   //   console.log(metainfo);
  
//     // for (let index = 0; index < data.metadata.length; index++) {
//     //   dropdown.append("option").text(dropnames[index]).property("value", dropnames[index]);

  
    
// }

// function buildCharts(params) {
//   console.log(params);
//   let variable1 = d3.select("#selDataset");
// }

// function optionChanged(params) {
//   buildPanel(params);
//   buildCharts(params);
// }




// // Init to load the dataset, populate the dropdown, take the first entry and pass to panel and chart fuction
// function init() {
//   let dropdown = d3.select("#selDataset");

//   d3.json(url).then((data) => {
//     let dropnames = data.names;
//     for (let index = 0; index < dropnames.length; index++) {
//       dropdown.append("option").text(dropnames[index]).property("value", dropnames[index]);
//     }

//     buildPanel(dropnames[0]);
//     buildCharts(dropnames[0]);
//   })

// }

// init();
