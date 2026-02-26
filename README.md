# clone-tabnews -

Implementacao do tabnews para o curso.dev

[Site](https://clone-tabnews-eight-blue.vercel.app/)

# Prettier

- `npm install prettier -D`, onde o `-D` significa que uma dependencia de desenvolvimento.

# Requirements

- `nvm install`

# Start the project

- `npm init` and select MIT license
- `npm install next@13.1.6`
- `npm install react@18.2.0`
- `npm install react-dom@18.2.0`

# Start database
```bash
docker compose -f infra/compose.yaml up

#using a client to connect to container database
brew doctor
brew update
brew install libpq
brew link --force libpq
psql --host=localhost --username=postgres --port=5342 --dbname=postgres

# if have any changes in the config run:
docker compose -f infra/compose.yaml up -d --force-recreate

# to delete all
docker compose -f infra/compose.yaml down
```