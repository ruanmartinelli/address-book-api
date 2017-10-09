# Address Book API

<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

> An Address Book back-end API

:books: [See Documentation](https://api-address-book.herokuapp.com/)

### Requirements

* Node.js 7.6.0+
* MySQL

### Dependencies

* [Express](https://github.com/expressjs/express) web framework
* [Knex](http://knexjs.org/) SQL query builder
* [Ava](https://github.com/avajs) for concurrent tests
* [Babel](https://babeljs.io) JS transpiler
* [Firebase](https://github.com/firebase/firebase-js-sdk) Firebase JS SKD
* [Joi](https://github.com/hapijs/joi) schema validator
* [JWT](https://jwt.io/) for stateless authentication

### Folder structure

Folders look like this:

```bash
.
├── /test/                      # Tests
├── /src/                       # Source files
│   ├── /db/                    # Database connection module
│   ├── /util/                  # Reusable modules
│   ├── /migration/             # Knex DB migrations
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

3. Migrate the database:

```bash
npm run db:latest
```

4. Run

```bash
npm run dev
```

### npm Scripts

Start the server in Production mode:

*Also migrates the database.*

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

Migrate the database:
```bash
npm run db:latest
```

### License

MIT © [Ruan Martinelli](http://ruanmartinelli.com)
