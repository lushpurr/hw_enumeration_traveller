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
    const transportFilter = this.journeys.filter( journey => journey.transport === transport);
    return transportFilter;
  
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
