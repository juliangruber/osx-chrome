const chrome = require('.')

chrome({
  uri: 'https://github.com/'
}, (err, ps) => {
  if (err) throw err
  ps.on('error', console.error)
})
