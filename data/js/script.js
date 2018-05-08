//JS and Leaflet stuff

var map = L.map('map', {
  center: [5, 28],
  zoom: 3,
});


L.tileLayer('https://api.mapbox.com/styles/v1/norabenedict/cjgsf255w000p2rjpkilnc8w2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm9yYWJlbmVkaWN0IiwiYSI6ImNpdXllbjdkbzA0aHYyeWwxd3BoaDdrYzgifQ.F94DF9486D8vAprIkZSOnQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
}).addTo(mymap);

//Add some GeoJSON
