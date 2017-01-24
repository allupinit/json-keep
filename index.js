function keepOnly (inData, keepers) { // gets rid of everything but specified keys
  var outData = {} // set as object
  for (var i = 0, len = keepers.length; i < len; i++) { // iterate through all keys
    if (inData[keepers[i]]) outData[keepers[i]] = inData[keepers[i]]
  }
  return outData
}

module.exports = keepOnly
