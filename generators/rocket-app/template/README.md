# FicusJS and Rocket Starter Kit

## 🚀 Project Structure

Inside your project, you'll see the following folders and files:

```
.
├── config
│   └── rocket.config.js
├── site
│   ├── pages
│   │   └── index.rocket.html
│   └── public
│       └── favicon.ico
└── package.json
```

Rocket looks for `.rocket.md` or `.rocket.js` or `.rocket.html` files in the `site/pages` directory. Each page is exposed as a route based on its file name.

There's nothing special about `site/src/components/`, but that's where we like to put our web components.

Any static assets, that is not referenced via HTML but you still want to be on the web server we can place in the `site/public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:------------------|:---------------------------------------------|
| `npm install`     | Installs dependencies                        |
| `npm run start`   | Starts local dev server at `localhost:8000`  |
| `npm run build`   | Build your production site to `./_site/`     |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run test`    | Runs your ava tests                          |
| `npm run lint`    | Lint your code based on standardjs style     |


## 👀 Want to learn more?

Check out [ficusJS documentation](https://docs.ficusjs.org/) and [Rocket documentation](https://rocket.modern-web.dev)
