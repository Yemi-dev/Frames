# React.js + TypeScript + Styled Components + Storybook

## Features

- TypeScript
- ESlint, Prettier
- Styled-Components
- Storybook
- Jest, Unit testing with Jest and testing libary

# hierarchy

```shell
components folder(only shared components) -> widgets(contains components specific to the page and coupling of all the components used in it) -> pages(where API calls happen)
```

## Structure

```raw
.
├── .storybook/                       Storybook config folder
├── public/                           Static content to serve
├── src/
│   ├── config/
│   │    └── apiConfig.js              API setup
│   ├── pages/
│   │    └── *                        Page components, routing is based on file tree
│   ├── ui/                          Reusable stateless components based on Styled-Components with story and jest test, in 3 different subfolders
│   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │    └── widgets                  Wdigets consume a set of components, can be something larger lives in pages.
│   └── utils/                        Common client side tools
├── index.jsx                          The app entry point
├── routes.yml                          Where all the app routes are put
├── editorconfig.json                    Editor settings
├── .eslintrc.js                        Linter config
├── .prettierrc                       Prettier config
├── jest.config.js                    Test environment config
├── jest.setup.ts                     Bootstrapping script for Jest/Enzyme
└── package.json                      Application manifest
```

## Development

```shell
yarn install

# start dev mode
yarn start
```

## Run storybook

```
yarn storybook
```

## Test, Lint and Type checking

```shell
# run unit test
yarn test

# run type check
yarn type-check

# run eslint
yarn lint

```
