const spawn = require('child_process').spawn

module.exports = (opts, cb) => {
  const env = Object.assign({}, process.env)
  if (opts.display) env.DISPLAY = `:${opts.display}`

  const args = [
    '--wait-apps',
    '--new',
    '--fresh',
    '-b', 'com.google.Chrome',
    opts.hide && '--hide',
    '--args',
    opts.proxyServer && `--proxy-server=${opts.proxyServer}`,
    `--user-data-dir=${opts.dataDir || `/tmp/${Math.random().toString(16).slice(2)}`}`,
    opts.dataDir && `--user-data-dir=${opts.dataDir}`,
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

  cb(null, spawn('open', args, { env }))
}
