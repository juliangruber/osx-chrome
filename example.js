const chrome = require('.')

chrome({
  uri: 'https://github.com/',
  hide: !!process.argv[2]
}, (err, ps) => {
  if (err) throw err    
  ps.on('error', console.error)
})
