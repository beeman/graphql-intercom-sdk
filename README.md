# graphql-intercom-sdk

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/beeman/graphql-intercom-sdk.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/beeman/graphql-intercom-sdk.svg)
![npm](https://img.shields.io/npm/dw/graphql-intercom-sdk.svg)
![npm](https://img.shields.io/npm/dm/graphql-intercom-sdk.svg)
![npm](https://img.shields.io/npm/dy/graphql-intercom-sdk.svg)
![npm](https://img.shields.io/npm/dt/graphql-intercom-sdk.svg)
![NPM](https://img.shields.io/npm/l/graphql-intercom-sdk.svg)
![npm](https://img.shields.io/npm/v/graphql-intercom-sdk.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/beeman/graphql-intercom-sdk.svg)
![npm collaborators](https://img.shields.io/npm/collaborators/graphql-intercom-sdk.svg)

Node SDK for the graphql-intercom API.

## Usage


#### Update meta data:

Update the following fields in `package.json`:

- name
- description
- repository
- keywords
- author
- license
- bugs
- homepage

Make sure to don't change the `version` property, versioning this package is handled by `semantic-release`!

#### Update README

Basically you want to search/replace the repo and package name to match your repo/package name and add any new info.

### Getting the GitHub and NPM tokens

#### GitHub

- Log in to GitHub.
- Navigate to [https://github.com/settings/tokens](https://github.com/settings/tokens).
- Click `Generate new token`.
- Fill in the `note` field so you remember what the token is for.
- Select the `write:packages` scope. This will also enable the `repo` and `read:packages` scopes.
- Click `Generate token`.
- Copy the code and store it to use in the next step.

#### NPM

- Log in to NPM.
- Click the Tokens link from the top-right menu.
- Click Create New Token
- Select `Read and Publish` then click `Create Token`.
- Copy the code and store it to use in the next step.

### Setting the GitHub and NPM tokens

- Open your new repo on GitHub.
- Navigate to `Settings` then `Secrets`.
- Click `Add a new secret`.
- Add the `GH_TOKEN` secret with the GitHub token.
- Click `Add a new secret` again.
- Add the `NPM_TOKEN` secret with the NPM token.

Your repo is now set up to publish packages to NPM and the GitHub Package Registry.

### Write your code

Write your amazing new code and make sure to update the tests!

You can run `yarn lint` and `yarn test` to check if your project will pass CI.

### Publish it

With a `git push` you will create a new version and publish it to `npm`.

```shell script
git commit -m "feat: initial commit"
git push origin master 
```

## Credits

Based on [npm-typescript-package-boilerplate](https://github.com/93v/npm-typescript-package-boilerplate) with a few changes.

## MIT License
