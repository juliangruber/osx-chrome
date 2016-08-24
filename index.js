const spawn = require('child_process').spawn
const find = require('osx-find-executable')
const foreground = require('osx-foreground')

module.exports = (opts, cb) => {
  const env = Object.assign({}, process.env)
  if (opts.display) env.DISPLAY = `:${opts.display}`

  const proxy = opts.proxy || opts.proxyServer

  find('com.google.Chrome', (err, exec) => {
    if (err) return cb(err)

    const args = [
      proxy && `--proxy-server=${proxy}`,
      `--user-data-dir=${opts.dataDir ||
        `/tmp/${Math.random().toString(16).slice(2)}`}`,
      '--disable-restore-session-state',
      '--no-default-browser-check',
      '--start-maximized',
      '--disable-default-apps',
      '--disable-sync',
      '--enable-fixed-layout',
      '--no-first-run',
      '--noerrdialogs',
      opts.uri
    ].filter(Boolean)

    const ps = spawn(exec, args, { env })
    if (opts.background) return cb(null, ps)

    foreground(ps.pid, err => {
      if (err) return cb(err)
      cb(null, ps)
    })
  })
}
