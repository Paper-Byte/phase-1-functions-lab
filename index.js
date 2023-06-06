const distanceFromHqInBlocks = (pickupLocation) => {
  return Math.abs(42 - pickupLocation);
};

const distanceFromHqInFeet = (pickupLocation) => {
  return distanceFromHqInBlocks(pickupLocation) * 264;
};

const distanceTravelledInFeet = (pickupLocation, dropoffLocation) => {
  return Math.abs(pickupLocation - dropoffLocation) * 264;
};

const calculatesFarePrice = (pickupLocation, dropoffLocation) => {
  const fareDistance = distanceTravelledInFeet(pickupLocation, dropoffLocation);
  if (fareDistance < 400) {
    return 0;
  } else if (fareDistance <= 2000) {
    return (fareDistance - 400) * 0.02;
  } else if (fareDistance < 2500) {
    return 25;
  }
  return "cannot travel that far";
};
