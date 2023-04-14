import chalk from 'chalk'

const origin = {
  pinned: '📌',
  packageManager: '📦',
  environment: '🌐',
  lock: '🔒'
}
export const getOriginIcon = (name) => {
  return origin[name] ?? ''
}

const result = {
  success: chalk.green.bold('✔'),
  failure: chalk.red.bold('❌')
}
export const getResultIcon = (name) => {
  return result[name] ?? ''
}

const status = {
  running: '🕙',
  success: '✅',
  error: '❌',
  cancelled: '❎'
}
export const getStatusIcon = (name) => {
  return status[name] ?? ''
}
