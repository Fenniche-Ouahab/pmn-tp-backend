# :notebook_with_decorative_cover: TP Node

## Back
- :heavy_check_mark: Crypt password on register (see Bcrypt)
- :heavy_check_mark: Only allow logged in user to see all posts
- :heavy_check_mark: Only allow logged in admin to create a post

## Front
- :heavy_check_mark: Create a register page
- :heavy_check_mark: Create a login page
- :heavy_check_mark: Create a page to show posts (logged in users only)
- :heavy_check_mark: Create a page to create a post (admin only)
- :heavy_check_mark: Create a sign out page

## :red_circle: Obligations
- :heavy_check_mark: Github
- :heavy_check_mark: Docker


# LANCEMENT DU PROJET 

## URL
```
127.0.0.1:3000
```

## Launch docker
```
docker-compose up
```

## Start docker
```
docker-compose start
```

## Remove container
```
docker-compose down
```

## Show container logs
```
docker-compose logs -f
```

## Access to docker
```
docker-compose exec node /bin/sh
```

## Environment variable
- Rename .env.sample to .env
- Add a key for JWT_KEY on this file (secret key, you have to ask me).