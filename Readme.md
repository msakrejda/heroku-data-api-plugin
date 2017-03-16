# heroku-data-api-plugin

A Heroku plugin to communicate with the undocumented, internal, unstable
data APIs. We hope to bring you a real API one day.

### Usage

`heroku data-api GET /client/v11/databases/postgresql-triangular-89732`

A custom host (instead of `postgres-api.heroku.com`) can be set with the
`HEROKU_DATA_HOST` environment variable, e.g.:

`HEROKU_DATA_HOST=postgres-api.example.com heroku data-api GET /client/v11/databases/postgresql-awesome-12345`

### Installation

```bash
$ heroku plugins:install heroku-data-api
```

#### Update

```bash
$ heroku plugins:update heroku-data-api
```

## THIS IS BETA SOFTWARE

Thanks for trying it out. If you find any problems, please report an
issue and include your Heroku toolbelt version and your OS version.
