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

// if (magnitude > 9.0) {
//     return "#160206";
//   }
//   if (magnitude > 8.0) {
//     return "#2c040c";
//   }
//   if (magnitude > 7.0) {
//     return "#420612";
//   }
//   if (magnitude > 6.0) {
//     return "#580818";
//   }
//   if (magnitude > 5.0) {
//     return "#6e0a1e";
//   }
//   if (magnitude > 4.0) {
//     return "#840c24";
//   }
//   if (magnitude > 3.0) {
//     return "#9a0e2a";
//   }
//   if (magnitude > 2.0) {
//     return "#b01030";
//   }
//   if (magnitude > 1.0) {
//     return "#c61236";
//   } else {
//     return "#dc143c";
//   }