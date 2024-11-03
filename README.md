# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

- build the website using `npm run build`
- commit the changes (including the `build` directory)
- (this is of course not nice, but i think it is still necessary. not sure if it is fixed with the gh action now)
- push the changes to the `main` branch
- Github actions are configured to deploy the website to Github pages on every push to the `main` branch.
