const validate = require('../../libs/validate')

module.exports = (plop) => {
  return {
    description: 'FicusJS Snowpack app',
    prompts: [
      {
        type: 'input',
        name: 'app_name',
        message: 'App name:',
        validate: (value) => validate.required(value, 'App name')
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: '{{cwd}}/{{kebabCase app_name}}/',
        templateFiles: 'generators/snowpack-app/template/**/*',
        base: 'generators/snowpack-app/template/',
        abortOnFail: true,
        force: true,
        globOptions: { dot: true }
      }
    ]
  }
}
