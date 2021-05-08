/**
 * Install Husky Script
 */

const { spawn } = require('child_process')

const isSkip = !!process.env.HUSKY_SKIP_INSTALL

if (isSkip) process.exit()

const isWindows = process.platform === 'win32'
const npx = spawn(isWindows ? 'npx.cmd' : 'npx', ['husky', 'install'], {
  windowsHide: true,
})

npx.stdout.pipe(process.stdout)

npx.on('error', error => {
  console.error(error)
  process.exit(1)
})
