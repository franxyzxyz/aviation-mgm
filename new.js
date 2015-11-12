var passenger2 = new Passenger({
  firstName: "Frances",
  lastName: "Ng",
  dob: new Date('01.01.1987')
});

passenger2.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});


// Create Flight
var flight1 = new Flights({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines",
  passengers: []
})

flight1.save(function(err){
  if (err) console.log(err);
  console.log('Flight 1 created!');
})

var flight2 = new Flights({
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways",
  passengers: []
})

flight2.save(function(err){
  if (err) console.log(err);
  console.log('Flight 2 created!');
})


// CREATE AIRPORT
var jfk = new Airports({
  name: "JFK",
  country: "USA",
  opened: new Date("1990")
});

jfk.save(function(err){
  if (err) console.log(err);
  console.log("Airport Created");
})


// Create Terminal
Flights.find({}, function(err, flights){
      var terminal1 = new Terminals({
        name: "Terminal 1",
        capacity: 234324,
        // flights: [{_id: ObjectId("5644319376a458ff350c70ce")}
      });

      flights.forEach(function(elem){
        terminal1.flights.push(elem);
      })

      terminal1.save(function(err){
        if (err) console.log(err);
        console.log('terminal created!');
      });
  });
