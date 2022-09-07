import { required } from '../../libs/validate.mjs'

export default function (plop) {
  return {
    description: 'FicusJS 11ty app',
    prompts: [
      {
        type: 'input',
        name: 'app_name',
        message: 'App name:',
        validate: (value) => required(value, 'App name')
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: '{{cwd}}/{{kebabCase app_name}}/',
        templateFiles: 'generators/11ty-app/template/**/*',
        base: 'generators/11ty-app/template/',
        abortOnFail: true,
        force: true,
        globOptions: { dot: true }
      }
    ]
  }
}
