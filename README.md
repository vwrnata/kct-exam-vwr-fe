# kct-exam-vwr-fe
Testovací aplikace Wrnata - frontend

## Endpoints setting
Remote data endpoint "https://api.thecatapi.com/v1/" is set in
/src/store/modules/breeds/actions.js BASE_REMOTE_URL

Backend data endpoint "http://localhost:9080/kcte/rest/v1/" is set in 
/src/store/modules/favoritess/actions.js BASE_BE_URL

## Build Setup
Requires nodejs version v12

Please check your nodejs version

``` bash
# check nodejs version
$ node --version

# install dependencies
$ npm install

# build for production
$ npm run build

copy /dist folder to yout web server

```
