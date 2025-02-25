import { findVoltaGlobals, translateArgs } from '../../../helpers/args.js'

const middleware = (yargs) => {
  if (findVoltaGlobals(yargs, ['add', 'install'])
  ) {
    yargs.pkg.cmd = 'volta'
    yargs.pkg.args = ['install', yargs.package]
  }

  if ('save-dev' in yargs) {
    translateArgs(yargs, '--save-dev', '-D')
  }

  if ('save-optional' in yargs) {
    translateArgs(yargs, '--save-optional', '-O')
  }

  if ('save-peer' in yargs) {
    translateArgs(yargs, '--save-peer')
  }

  if ('save-exact' in yargs) {
    translateArgs(yargs, '--save-exact', '-E')
  }
}

const add = {
  command: 'add <package> [args] [FLAGS]',
  aliases: ['a'],
  desc: 'add package',
  conflicts: ['clean', 'install', 'remove', 'update', 'upgrade'],
  builder: (yargs) => {
    yargs.positional('package', {
      type: 'string',
      desc: '<package>'
    })

    yargs.option('save-dev', {
      alias: 'D',
      type: 'boolean',
      desc: 'add package as devDependencies',
      usage: '$0 add <package> --save-dev',
      implies: ['package'],
      conflicts: ['save-optional', 'save-peer']
    })

    yargs.option('save-optional', {
      alias: 'O',
      type: 'boolean',
      desc: 'add package as optionalDependencies',
      usage: '$0 add <package> --save-optional',
      implies: ['package'],
      conflicts: ['save-dev', 'save-peer']
    })

    yargs.option('save-peer', {
      type: 'boolean',
      desc: 'add package as peerDependencies',
      usage: '$0 add <package> --save-peer',
      implies: ['package'],
      conflicts: ['save-dev', 'save-optional']
    })

    yargs.option('save-exact', {
      alias: 'E',
      type: 'boolean',
      desc: 'add package as exact version',
      usage: '$0 add <package> --save-exact',
      implies: ['package']
    })

    yargs.option('global', {
      alias: 'g',
      type: 'boolean',
      desc: 'add package as global',
      usage: '$0 add <package> --global',
      implies: ['package']
    })

    yargs.middleware(middleware)

    return yargs
  }
}

export default add
