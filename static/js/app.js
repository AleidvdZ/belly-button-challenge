// Use the D3 library to read in samples.json from the URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function buildPanel(p) {
  console.log(p);

  let PANEL = d3.select("#sample-metadata.panel.body");
  console.log(PANEL);

    d3.json(url).then((data) => { 
      let patientMetas = data.metadata;
      let patientInfo = patientMetas.filter(id => id.id == p);
      console.log(patientInfo)
 
  
      // for (patientInfo [key, value] of Object.entries(patientInfo)) {
      //   console.log(`${key}: ${value}`);
      // }
     
      PANEL.append(patientInfo);
      console.log(PANEL);

  })
}


// functions to build the two charts
function buildCharts(p) {
  console.log(p);
  
  d3.json(url).then((data) => {
    let patientIDs = data.samples;
    let patientID = patientIDs.filter(id => id.id == p);
    console.log(patientID)

   // Create empty arrays for creating chart
   otu_id = []
   otu_labels = []
   sample_values = []

   






  })
}

function optionChanged(params) {
  buildPanel(params);
  buildCharts(params);
}




// Init to load the dataset, populate the dropdown, take the first entry and pass to panel and chart fuction
function init() {
  let dropdown = d3.select("#selDataset");
  console.log(dropdown);

  d3.json(url).then((data) => {
    let dropnames = data.names;
    for (let i = 0; i < dropnames.length; i++) {
      dropdown.append("option").text(dropnames[i]).property("value", dropnames[i]);
    }

    buildPanel(dropnames[0]);
    buildCharts(dropnames[0]);
  })

}

init();
