import { required } from '../../libs/validate.mjs'

export default function (plop) {
  return {
    description: 'FicusJS Rocket app',
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
        templateFiles: 'generators/rocket-app/template/**/*',
        base: 'generators/rocket-app/template/',
        abortOnFail: true,
        force: true,
        globOptions: { dot: true }
      }
    ]
  }
}
