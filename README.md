# TypeScript monorepo template

----


## Features

The main focus of this repo is making the `Go to definition` feature in IDEs
work without any surprises, meaning it will work after a fresh clone without
needing to build the project.   Supports `jest`, `typescript`, `lint`, `prettier`, `react`


## Setup

This repo uses [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
and [Lerna](https://lerna.js.org/). I recommend `yarn` for monorepos due to its
easier setup

```
yarn install
yarn lint
yarn test
yarn build
yarn start
```

## References

Used the wrok from the following blog posts as a starting point:

- [How to set up a TypeScript monorepo with Lerna](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
- [Making TypeScript monorepos play nice with other tools](https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680)
