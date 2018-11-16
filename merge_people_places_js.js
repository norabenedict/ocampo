var people = require('./People-2018-08-03.json')
var places = require('./Place-2018-08-03.json')

let output = []

for (let place of places) {
    // create a new point
    let point = {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [place.longitude, place.latitude]
        },
        properties: {
            name: place.name,
            popupContent: place.name,
            affiliatedPeople: []
        }
    }
    // add the affiliated people to place
    for (let person of people) {
        if (place.id == person.birthplace || place.id == person.deathplace) {
            point.properties.affiliatedPeople.push(person.name)
        }
    }
    // add the new point to the list
    output.push(point)
}

console.log(JSON.stringify(output, null, 2))
