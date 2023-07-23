# The-Rogue-Barbershop
The Rogue Barbershop

## Architect
open https://app.diagrams.net/
pull therogue to https://app.diagrams.net/

## Install
install for test, npm start can be skipped if build only
```sh
npm install
npm start
```

## Build
build for static object
```sh
npm run build
serve -s build
```


## Deployment
deploy on AWS S3 bucket web hosting
```sh
aws s3 sync build/ s3://theroguebarber
```
[AWS static S3 bucket host](http://theroguebarber.s3-website-ap-southeast-1.amazonaws.com/)