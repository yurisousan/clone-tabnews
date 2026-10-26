# clone-tabnews

Implementacao do tabnews para o curso.dev

[Site](https://clone-tabnews-eight-blue.vercel.app/)

# Stack

- Node.js `24.x` (pinned in `engines` in `package.json`)
- Next.js `16`
- React `19`
- PostgreSQL `16` (via Docker)

# Requirements

```bash
# install and use the Node.js version from .nvmrc
nvm install
nvm use
```

> Vercel ignores `.nvmrc` and reads `"engines": { "node": "24.x" }` from `package.json`.
> Set **Settings → Build and Deployment → Node.js Version** on Vercel to `24.x` to keep both in sync.

# Install

```bash
npm install
```

# Start the project from scratch

```bash
npm init # select MIT license
npm install next@^16.4.3
npm install react@^19 react-dom@^19
npm install pg@^8.11.3
```

Then add the Node.js version to `package.json`:

```json
"engines": {
  "node": "24.x"
}
```

# Upgrading Node.js / React

Commands used to upgrade from Node.js `20.x` + React `18` to Node.js `24.x` + React `19`:

```bash
# 1. add "engines": { "node": "24.x" } to package.json
# 2. upgrade React (removes the "React 18 support is deprecated in Next.js 16" warning)
npm install react@^19 react-dom@^19
# 3. check the production build
npx next build
```

# Prettier

- `npm install prettier -D`, onde o `-D` significa que uma dependencia de desenvolvimento.
- `npm run lint:check` to check formatting
- `npm run lint:fix` to fix formatting

# Run the project and tests

```bash
npm run dev
npm run test:watch
```

# Start database

```bash
docker compose -f infra/compose.yaml up

# using a client to connect to container database
brew doctor
brew update
brew install libpq
brew link --force libpq
psql --host=localhost --username=postgres --port=5432 --dbname=postgres

# if have any changes in the config run:
docker compose -f infra/compose.yaml up -d --force-recreate

# to delete all
docker compose -f infra/compose.yaml down
```
