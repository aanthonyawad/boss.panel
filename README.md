# Boss Panel

Boss Panel is an App written in angular and ts-node which lets boss meets with his clients in starbucks using the great distance circle formula

## Tools used

- ts-node 
- angular 11

## Generates
A runnable microservice repsented as the backend build using ts-node hosted on nginx can be found on localhost:300
The ui was build using angular 11 materialize angular and flex SCSS   


## How To serve locally the angular project  
```bash
ng serve 
```
## How to deploy the angular project on docker
```bash
docker build --pull --rm -f "ClientApp\Dockerfile" -t clientapp:v1 "ClientApp"
docker run --rm -d  -p 80:80/tcp clientapp:v1
docker tag aanthonyawad/clientapp:v1
docker push aanthonyawad/clientapp:v1
```
run node project scripts from terminal 
```bash
npm run build
npm run dev
npm run test
npm run start
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

