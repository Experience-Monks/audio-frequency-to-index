var freq2index = require('./')
var test = require('tape')

test('convert a Hz frequency to an index for WebAudio', function (t) {
  t.equal(freq2index(800, 44100, 512), 19)
  t.equal(freq2index(400, 44100, 1024), 19)
  t.equal(freq2index(0, 44100, 512), 0)
  t.equal(freq2index(4100, 44100, 512), 95)
  t.equal(freq2index(44100, 44100, 512), 512)
  t.equal(freq2index(22050, 44100, 512), 512)
  t.equal(freq2index(22000, 44100, 512), 511)
  t.end()
})
