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

};


module.exports = Traveller;
