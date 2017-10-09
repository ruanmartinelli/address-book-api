- Author: [Ruan Martinelli](https://ruanmartinelli.com)
- Project URL: https://github.com/ruanmartinelli/address-book-api

## Create an Account

```bash
curl --request POST \
  --url https://api-address-book.herokuapp.com/api/user \
  --header 'content-type: application/json' \
  --data '{
   "email": "strv@example.com",
   "name": "strv",
   "username": "strv",
   "password":"strv"
}'
```

## Login

```bash
curl --request POST \
  --url https://api-address-book.herokuapp.com/login \
  --header 'content-type: application/json' \
  --data '{
   "email": "strv@example.com",
   "password":"strv"
}'
```

## Get All Users

Note: change `<ACCESS_TOKEN>` to be the token received on the "Login" request.

```bash
curl --request GET \
  --url https://api-address-book.herokuapp.com/api/user \
  --header 'authorization: <ACCESS_TOKEN>' \
  --header 'content-type: application/json'
```

## Get User by ID

Note: change `<ACCESS_TOKEN>` to be the token received on the "Login" request.

```bash
curl --request GET \
  --url https://api-address-book.herokuapp.com/api/user/4 \
  --header 'authorization:  <ACCESS_TOKEN>' \
  --header 'content-type: application/json'
```

## Create a Contact

Note: change `<ACCESS_TOKEN>` to be the token received on the "Login" request.

```bash
curl --request POST \
  --url https://api-address-book.herokuapp.com/api/contact \
  --header 'authorization: <ACCESS_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
	"email":"contact@contact.com",
	"phone":"+123456789"
}'
```
