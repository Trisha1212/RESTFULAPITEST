<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [API Test](#APITest)
  - [Tech stacks](#tech-stacks)
  - [Setup](#setup)
    - [Dev Setup nodejs and yarn](#dev-setup-nodejs-and-yarn)
    - [Server(production) setup.](#serverproduction-setup)
    - [Running test specs](#running-test-specs)
  - [How to?](#how-to)
    - [How to write specs for your project to check web functions](#how-to-write-specs-for-your-project-to-check-web-functions)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# APITest

API test : httpbin API (https://httpbin.org)
- Check the basic functionality of API.

## Tech stacks

- [`Mocha`](https://mochajs.org/)
- Chai for Assertion (http://chaijs.com/)
- supertest-as-promised(https://www.npmjs.com/package/supertest-as-promised)

## Setup
### Dev Setup nodejs and yarn
* install node
```
brew update
brew install node
```
* [install yarn](https://yarnpkg.com/lang/en/docs/install/)
* install mocha chai and supertest-as-promised
Use yarn to install mocha chai and supertest-as-promised globally with:
```
yarn global add protractor
```
This will install two command line tools, mocha chai and supertest-as-promised. Try running `mocha --version` to make sure it's working.
The Chai is a helper tool to for assertion of API response

### Running test specs

```
yarn test
```


### Folder structure

Tests -  The tests will call functions from the API and Payload areas of the framework and be responsible for asserting responses.
API -  HTTP requests are grouped based on the resource you are calling so if there are two resources called if the request changes it requires a single change to propagate through the framework.
Payloads - Payloads that are required for requests and responses are stored in this area. The idea is similar to the API area in that one class is responsible for one payload that may be called multiple times. Again, this means if the payload changes it requires a single change to propagate through the framework.