// Use the D3 library to read in samples.json from the URL.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function buildPanel(params) {
  console.log(params);

}

function buildCharts(params) {
  console.log(params);
}

function optionChanged(params) {
  buildPanel(params);
  buildCharts(params);
}





function init() {
  let dropdown = d3.select("#selDataset");

  d3.json(url).then((data) => {
    let dropnames = data.names;
    for (let index = 0; index < dropnames.length; index++) {
      dropdown.append("option").text(dropnames[index]).property("value", dropnames[index]);
    }

    buildPanel(dropnames[0]);
    buildCharts(dropnames[0]);
  })

}

init();
