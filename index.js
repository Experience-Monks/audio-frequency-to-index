var clamp = require('clamp')

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, fftSize) {
  var nyquist = sampleRate / 2
  var length = fftSize / 2
  var index = Math.round(frequency / nyquist * length)
  return clamp(index, 0, length)
}
