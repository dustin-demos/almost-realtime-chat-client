
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

// NOTES
// 1. This is a flimsy solution to remove logs
// 2. Due to a bug, setting main to false allows imports in symlinked files

const project = JSON.stringify(process.env.PROJECT)

const production = {
  'console.log': 'void 0 && console.log', // 1
  'API': '',
  'DEVELOPMENT': null,
  'PRODUCTION': true,
  'PROJECT': project
}

const development = {
  'API': 'http://localhost:3000',
  'DEVELOPMENT': true,
  'PRODUCTION': null,
  'PROJECT': project
}

export default {
  plugins: [
    replace(process.env.NODE_ENV === 'production' ? production : development),
    resolve({ main: false }) // 2
  ]
}
