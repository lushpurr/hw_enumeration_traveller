const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startPoints = this.journeys.map( (journey) => {
    return journey.startLocation;
  });
return startPoints;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const endPoints = this.journeys.map( (journey) => {
    return journey.endLocation;
  });
  return endPoints;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return transportFilter = this.journeys.filter( journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return journeyOverMinDistance =  this.journeys.filter( journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map( (journey) => {
    return journey.transport;
  });
  let uniqueTransport = new Set(transportTypes);
  return Array.from(uniqueTransport);
};
  


// var resArr = [];
// data.filter(function(item){
//   var i = resArr.findIndex(x => (x.name == item.name && x.date == item.date && x.amt == item.amt));
//   if(i <= -1){
//         resArr.push(item);
//   }
//   return null;
// });
// console.log(resArr)


module.exports = Traveller;
