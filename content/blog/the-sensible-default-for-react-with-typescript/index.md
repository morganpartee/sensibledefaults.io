---
title: The Sensible Default for React with Typescript
date: 2021-03-13T16:34:00.001Z
description: I have been writing react with typescript for awhile and here is my opinion on a good default!
postAuthor: Tony
---
# About

&nbsp;   

# Initialize your project | [**NPM Docs**](https://docs.npmjs.com/getting-started) | [**Yarn Docs**](https://classic.yarnpkg.com/en/docs/cli/)
~~~shell
yarn init --yes
~~~
or
~~~shell
npm init --yes
~~~
&nbsp;  
&nbsp;  
# Install Typescript | [**Docs**](https://www.typescriptlang.org/docs)

```shell
yarn add typescript -D
```
or 
```shell
npm i typescript --save-dev
```

### Create a Typescript Config in the root Directory
```shell
#Check for Typescript cli
tsc -v

#Generate the tsconfig.json
tsc --init

#Install typescript globally if you don't have the cli installed
npm i -g typescript
```
#### *./tsconfig.json*
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "noImplicitAny": false,
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "esnext",
      "dom",
      "dom.iterable"
    ],
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "allowJs": true,
    "baseUrl": "./",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "downlevelIteration": true,
    "paths": {
      "components/*": [
        "src/components/*"
      ]
    }
  },
  "include": [
    "./src",
    "./webpack.config.ts"
  ]
}
```
&nbsp;  
&nbsp;  
# React Setup | [**Docs**](https://reactjs.org/docs/getting-started.html)

### Add Dependencies
```shell
yarn add react react-dom
yarn add @types/react @types/react-dom -D
```
or
```shell
npm i react react-dom --save
npm i @types/react @types/react-dom --save-dev
```

### Create the inital App files in your project's root directory
```shell
mkdir -p public src/components/HelloWorld
touch public/index.html  src/{index.tsx,App.tsx} src/components/HelloWorld/index.tsx 

```
#### *./public/index.html*
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React TypeScript App</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```
#### *./src/index.tsx*
```typescript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```
#### *./src/App.tsx*
```typescript
import React from "react";
import HelloWorld from "components/HelloWorld";

const App = () => <HelloWorld />;

export default App;
```
*Notice that I have used path bind to the components directory -- this will need to be configured properly in webpack in order to work*

#### *./src/components/HelloWorld/index.tsx*
```typescript
import React from "react";

const HelloWorld = () => (
    <>
        <h1>Hello World</h1>
    </>
);

export default HelloWorld;
```
&nbsp;  
&nbsp;  
# Add Webpack | [**Docs**](https://webpack.js.org/configuration/)

### Add dependencies
```shell
yarn add webpack webpack-cli webpack-dev-server ts-node @types/node @types/webpack @types/webpack-dev-server tsconfig-paths-webpack-plugin -D
```
or
```shell
npm i webpack webpack-cli webpack-dev-server ts-node @types/node @types/webpack @types/webpack-dev-server tsconfig-paths-webpack-plugin --save-dev
```
*We can run type checking through webpack(thanks to the nice [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin)*

```shell
yarn add ts-loader fork-ts-checker-webpack-plugin html-webpack-plugin -D
```
or
```shell
npm i ts-loader fork-ts-checker-webpack-plugin html-webpack-plugin --save-dev
```

### Create webpack.config.ts in your root directory
`touch webpack.config.ts`

#### *webpack.config.ts*
```typescript
import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const webpackConfig = (env): Configuration => ({
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        })
    ]
});

export default webpackConfig;
```
*HtmlWebpackPlugin is used to point to our index.html template*
*With the webpack.DefinePlugin we can set and access environment variables inside our app*

### Add npm scripts to package.json
```json
"scripts": {
  "dev": "webpack serve --open --hot --progress",
  "build": "webpack --mode=production --progress",
  "lint": "eslint './src/**/*.{ts,tsx}'",
  "lint:fix": "eslint './src/**/*.{ts,tsx}' --fix"
},
```
&nbsp;  
&nbsp;  
# Adding Prettier | [**Docs**](https://prettier.io/docs/en/options.html)
### Install dependencies
```shell
yarn add prettier -D
```
*or*
```shell
npm i prettier --save-dev
```
### Configure .prettierrc
`touch .prettierrc`
```json
{
  "printWidth": 100,
  "trailingComma": "none",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": false,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "auto",
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "useTabs": false,
  "htmlWhitespaceSensitivity": "css"
}
```
*I recommend configuring your IDE to run Prettier on each save. See docs: [https://prettier.io/docs/en/editors.html](https://prettier.io/docs/en/editors.html)*  
&nbsp;  
&nbsp;  
# Add ESLint | [**Docs**](https://eslint.org/docs/rules/)
### Install dependencies
```shell
yarn add eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier eslint-plugin-import -D
```
or
```shell
npm i eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier eslint-plugin-import --save-dev
```
### Create .eslintrc.json file in the root directory
`touch .eslintrc.json`
#### *.eslintrc.json*
```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "eslint-plugin-import",
    "prettier"
  ],
  "env": {
    "browser": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": [
      "tsconfig.json"
    ],
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```
### Create .eslintignore file and add webpack config file to it
```shell
touch .eslintignore
```
#### *./.eslintignore*
```shell
webpack.config.ts
```
&nbsp;  
&nbsp;  
# Add Jest and React Testing library for testing purposes | [**Docs**](https://jestjs.io/docs/en/configuration)
### Install dependencies
```shell
yarn add -D @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest 
```
or
```shell
npm i @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest --save-dev
```

### Create jest.config.js in the root directory and configure Jest/React Testing Library
```shell
touch jest.config.js
```

#### *jest.config.js*

```javascript
module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Adds special extended assertions to Jest
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```
*This is a typical jest config with a few mods*
- **Typescript Support** via `ts-jest`
- **Extended assertions** via `React Testing Library`

*Note: This can be added to the package.json under the jest object*

### Ensure the *tsconfig.json* as the esModuleInterop flag enabled
```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```
### To guarantee the Jest matchers are available for all test files whenever the developers put them create a globals.d.ts in the src directory
```shell
touch src/globals.d.ts
```
#### *src/globals.d.ts*
```javascript
import "@testing-library/jest-dom/extend-expect";
```
### Setup test directory
```shell
mkdir src/__tests__
touch src/__tests__/App.test.tsx
```
### Let's write our first test to meet code coverage requirements!
#### *./src/__tests__/App.test.tsx*
```typescript
import React from "react";
import { render } from "@testing-library/react";
import App from "src/App";

describe("<App />", () => {
  it("should render", () => {
    render(<App />);
  });
  
  it("should render an h1 with innerText of Hello, World!", () => {
    const { getByText } = render(<App />);
    const element = getByText("Hello, World!");
    
    expect(element.nodeName).toBe("H1");
  });
});
```
#### Create the scripts to run the tests in the *package.json*
```json
scripts: {
      ...
      "test":"jest",
      "test:watch":"jest --watch"
}
```   
# Create Dockerfile in the root directory that will run our application | [**Docs**](https://docs.docker.com/engine/reference/builder/)
#### *./Dockerfile*
```dockerfile
FROM registry.il2.dsop.io/platform-one/devops/pipeline-templates/ironbank/nodejs12:12.18.3.204 AS builder

USER root

WORKDIR /app

COPY package*.json tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM registry.il2.dsop.io/platform-one/devops/pipeline-templates/base-image/harden-nginx-19:1.19.0.244

USER appuser

COPY --from=builder --chown=appuser:appuser /app/build /var/www

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]
```
#### *./.dockerignore*
```
.git
node_modules
```

# Create Docker-compose yaml for easy development | [**Docs**](https://docs.docker.com/compose/)
```shell
touch docker-compose.yml
```
#### ./docker-compose.yml
```yaml
version: "3"
services:
  app:
    build: .
    ports:
      - 8080:8080
```
*Note: You will have to have at least read access to the [Container Registry](https://code.il2.dsop.io/platform-one/devops/pipeline-templates/container_registry)*






