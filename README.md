siste pre deadline commit: 

https://github.com/erlend-axelsson/bysykel/tree/99c4511e88aa466d8ac51c2f34ad5554b6079603

### Med Docker
Kjør følgende kommandoer: 
```
npm install
npm run docker
docker run -p 80:8080 -d erlend/bysykel
```
Applikasjonen skal da være tilgjengelig på http://localhost

Forutsetter at maskinen har node npm og docker.

### Uten Docker
Kjør følgende kommandoer:
```
npm install
npm run build
npm run host
```
Applikasjonen skal da være tilgjengelig på http://localhost:8080

Forutsetter at maskinen har node og npm.
