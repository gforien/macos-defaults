const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording finder NSTableViewDefaultSizeMode to 1')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'NSGlobalDomain',
          'NSTableViewDefaultSizeMode',
          '-int 1',
          '1',
        )
        .killApp('Finder')
        .openApp('Finder', '~/macos-defaults')
        .activateApp('Finder')
        .moveAndResizeApp('Finder', 0, 0, 740, 400)
        .captureApp('Finder', `${outputPath}/1.png`)
        .deleteDefault('NSGlobalDomain', 'NSTableViewDefaultSizeMode')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/1.png`, outputPath, '1')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/1` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:',
  )
  console.info(
    'defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder',
  )
}
