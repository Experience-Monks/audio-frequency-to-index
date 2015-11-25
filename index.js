var clamp = require('clamp')

module.exports = frequencyToIndex
function frequencyToIndex (freq, sampleRate, fftSize) {
  return clamp(Math.floor(freq / (sampleRate / fftSize)), 0, fftSize / 2)
}
