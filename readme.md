[express-url]: https://github.com/expressjs/express
[knex-url]: http://knexjs.org/
[ava-url]: https://github.com/avajs
[babel-url]: https://babeljs.io
[firebase-url]: https://github.com/firebase/firebase-js-sdk
[joi-url]:https://github.com/hapijs/joi
[jwt-url]: https://jwt.io/
[docs-url]:https://api-address-book.herokuapp.com/

# Address Book API

<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

> An Address Book back-end API

:books: [See Documentation](docs-url)

### Requirements

* Node.js 7.6.0 or higher
* MySQL

### Dependencies

* [Express][express-url] web framework
* [Knex](knex-url) SQL query builder
* [Ava](ava-url) for concurrent tests
* [Babel](babel-url) JS transpiler
* [Firebase](firebase-url) Firebase JS SKD
* [Joi](firebase-url) schema validator
* [JWT](jwt-url) for stateless authentication

### Folder structure

Folders look like this:

```bash
.
├── /test/                      # Tests
├── /src/                       # Source files
│   ├── /db/                    # Database connection module
│   ├── /util/                  # Reusable modules
|   ├── /script/                # SQL, bash, JS, etc.
│   └── /app/                   # API modules (i.g. Users, Contacts)
├── .env                        # Env. secrets and credentials 
├── index.js                    # Entry file
├── .babelrc                    # Babel configuration file
└── apidoc.json                 # APIDoc configuration file
```
_Note: some files were omitted for simplicity._

### Get started

1. Clone the repo:

```bash
git clone https://github.com/ruanmartinelli/address-book-api.git <NEW_NAME>
cd <NEW_NAME>
```
2. Create a .env file (remember to add your keys)

```bash
mv .env.example .env
```

3. Create the database:

```bash
# See src/script/db.sql
```

4. Run

```bash
npm run dev
```

### npm Scripts

Start the server in Production mode:
```bash
npm start 
```

Start the server in Development mode:
```bash
npm run dev 
```

Show lint errors:
```bash
npm run lint
```

Show lint errors and fix minor issues:
```bash
npm run lint:fix
```

Run AVA tests:
```bash
npm t
```

Run AVA tests in watch mode:
```bash
npm run test:watch
```

Generate API documentation:
```bash
npm run docs
```

### License

MIT © [Ruan Martinelli](http://ruanmartinelli.com)
