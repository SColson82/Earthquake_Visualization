//  Create map.

// Layers:
// Satellite
// Grayscale
// Outdoors

// Earthquakes:
// Data Markers:

//   // Set the color scale.
//   scale: ["#ffffb2", "#b10026"],

//  // Set up the legend.
//  var legend = L.control({ position: "bottomright" });
//  legend.onAdd = function() {
//    var div = L.DomUtil.create("div", "info legend");
//    var limits = geojson.options.limits;
//    var colors = geojson.options.colors;
//    var labels = [];

//    // Add the minimum and maximum.
//    var legendInfo = "<h1>Median Income</h1>" +
//      "<div class=\"labels\">" +
//        "<div class=\"min\">" + limits[0] + "</div>" +
//        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//      "</div>";

//    div.innerHTML = legendInfo;

//    limits.forEach(function(limit, index) {
//      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//    });

//    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//    return div;
//  };

//  // Adding the legend to the map
//  legend.addTo(myMap);

// });

// return "#420612";
// }
// if (magnitude > 90) {
//   return "#580818";
// } else {
//   return "#dc143c";
