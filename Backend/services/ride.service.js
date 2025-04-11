const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");
const crypto = require("crypto");
// const bcrypt = require("bcryptjs");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }
  const distanceTime = await mapService.getDistanceAndTime(pickup, destination);

  console.log("Distance and Time:", distanceTime);
  const fare = {
    bike: Math.round(
      20 +
        (distanceTime.distance.value / 1000) * 8 +
        (distanceTime.duration.value / 60) * 1.5
    ),
    auto: Math.round(
      30 +
        (distanceTime.distance.value / 1000) * 12 +
        (distanceTime.duration.value / 60) * 2
    ),
    car: Math.round(
      50 +
        (distanceTime.distance.value / 1000) * 15 +
        (distanceTime.duration.value / 60) * 3
    ),
  };
  return fare;
}
module.exports.getFare = getFare;

function getOtp(num) {
  const min = Math.pow(10, num - 1);
  const max = Math.pow(10, num) - 1;
  const otp = crypto.randomInt(min, max);
  return otp;
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("User, pickup, destination and vehicleType are required");
  }
  const fare = await getFare(pickup, destination);
  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });

  console.log("Created Ride:", ride);
  return ride;
};
