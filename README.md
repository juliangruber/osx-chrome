# osx-chrome

Launch a fresh Google Chrome on OSX.

## Example

```js
const chrome = require('osx-chrome')

chrome({ uri: 'https://github.com/' }, (err, ps) => {
  if (err) throw err    
  ps.on('error', console.error)
})
```

## Installation

```js
$ npm install osx-chrome
```

Google Chrome needs to be installed on your system as well.

## API

### chrome(opts, cb)

Options:

- `display`: Set process.env.DISPLAY to `:${opts.display}` for xvfb support
- `proxy`: Proxy server settings
- `dataDir`: Data dir, defaults to `/tmp/$RANDOM`
- `background`: Don't manually foreground the browser

## License

MIT
