const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.numberOfDinosaurs = function() {
    return this.dinosaurCollection.length;
}

Park.prototype.addDino = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDino = function(dinosaur) {
    const indexOfDino = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDino, 1);
}

Park.prototype.mostPopularDino = function() {

}

Park.prototype.dailyVisitors = function() {
    let visitorCount = 0;
    for(dinosaur of this.dinosaurCollection) {
        visitorCount += dinosaur['guestsAttractedPerDay']
    }
    return visitorCount;
}

module.exports = Park;