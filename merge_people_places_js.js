var people = require('./People-2019-01-29.json')
var places = require('./Place-2019-01-28.json')

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
            point.properties.affiliatedPeople.push({
              name: person.name,
              birthdate: person.birthdate,
              deathdate: person.deathdate,
              occupation: person.occupation.split(';'),
              sex: person.sex,
              viaf: person.viaf_id
          })
        }
    }
    // add the new point to the list
    output.push(point)
}

console.log(JSON.stringify(output, null, 2))
