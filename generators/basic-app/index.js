const validate = require('../../libs/validate')

module.exports = (plop) => {
  return {
    description: 'FicusJS basic app',
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
        templateFiles: 'generators/basic-app/template/**/*',
        base: 'generators/basic-app/template/',
        abortOnFail: true,
        force: true
      }
    ]
  }
}
