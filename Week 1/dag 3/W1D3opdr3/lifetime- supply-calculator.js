function calculateSupply(age,  amountPerDay){

  var maxAge = 100;
  var totalNeeded = Math.round((numPerDay * 365) * (maxAge - age));
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);

}