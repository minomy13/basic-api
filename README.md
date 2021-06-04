# BasicAPI

<p align="center">
  <img src="https://img.shields.io/github/license/minomy13/basic-api">
  <img src="https://img.shields.io/github/last-commit/minomy13/basic-api">
  <img src="https://img.shields.io/tokei/lines/github/minomy13/basic-api">
  <img src="https://img.shields.io/github/languages/code-size/minomy13/basic-api">
  <img src="https://img.shields.io/github/languages/top/minomy13/basic-api">
  <img src="https://img.shields.io/github/workflow/status/minomy13/basic-api/Build">
  <a href="https://codecov.io/gh/minomy13/basic-api">
    <img src="https://codecov.io/gh/minomy13/basic-api/branch/main/graph/badge.svg?token=53DVKG7OMY"/>
  </a>
  <a href="https://www.codacy.com/gh/minomy13/basic-api/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=minomy13/basic-api&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/2815c8618d154ac38fce90cbc9c21a26"/>
  </a>
  <a href="https://discord.gg/zwEaZTn">
    <img src="https://img.shields.io/discord/706603856007790612?label=discord"/>
  </a>
</p>
Hi :) This is a simple template of an API for you. Its build with node.js. You should have 'npm' and 'node.js' installed on your system. You can use it for your project (simply fork the repo) and you can edit every file you want. If you need help, you can ask me every time you want on discord. (See the Discord badge at the top?) Good luck and happy programming :) 😎

## Set Up

At first you have to add the `src/config/tokens.json` file. It has to be structured like so:

```json
{
  "MONGODB": "YOUR_MONGO_ACCESS_TOKEN_HERE",
  "TOKEN_SECRET": "RANDOM_SECRET_FOR_JWT_TOKENS"
}
```

In the part 'MongoDB' I will help you setting up the database. If this don't helps you enough, as allways ask me.

The `TOKEN_SECRET` is completely random. You can use a password generator if you want. (About 64 charakters?)

After this, you have to run `npm install`, to install all node modules. If this is done, you can start the server. See "Scripts".

## Scripts

### DEV

At first there is the 'dev' script. When you are developing, its very helpful, because its restarting the server everytime you are saving a file. Thats 'nodemon'. If this package isn't installed on your system, please install it with the command `npm i nodemon -g`. Then you can simply run `npm run dev`.

### START

Then there is the 'start' script. This one you can use, if you want to use your finished API. Its staticly and don't changes anyting if you are changing a file. Run `npm start`.

### TEST

This script is used for CIs. See 'CI' for more Information.

### TEST-MANUAL

If you'd like to write unit tests, this is the right script for you! You can inform you about this here: [Jest Unit Tests - Getting Started](https://jestjs.io/docs/getting-started). You have to name your test files like `filetotest.test.js`. Then you can run `npm run test-manual`.

## CI

I will describe this for GitHub Actions. I think, that this is the easiest way for small projects.

#### Step 1

```yml
name: Build
```

At first you have to give your workflow a name.

#### Step 2

```yml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

Then you should define, when the workflow runs. In this example it runs on pushes and pull requests on the 'main' branch. If you want to add a branch, simply do:

```yml
on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main, dev]
```

## MongoDB

In this part I will describe how to set up a MongoDB database for your project/s. First I will use MongoDB Atlas and then Docker and Linux.

### Atlas

This is a cloud service from MongoDB itself. Its good for testing or small projects, if you don't need much space.

At first you should go to [MongoDB Atlas](https://cloud.mongodb.com). There you can create a free account or log in with Google.

### Self Hosted

## Adding new routes

### How To

### Securing Them

## Config

### Jest

### Codecov

### Prettier

### node.js / package.json

## License

<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fminomy13%2Fbasic-api?ref=badge_large" alt="FOSSA Status">
  <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fminomy13%2Fbasic-api.svg?type=large"/>
</a>

**README will be finished in a few days.**
