# Example Web Payments Partial Authorization

[![LICENSE](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/square/tpl-oss-js/blob/main/LICENSE)

Example application to highlight using

- [Web Payments SDK Overview](https://developer.squareup.com/docs/web-payments/overview).
- [API Documentation](https://developer.squareup.com/reference/sdks/web/payments).

## Getting Started

Start by [cloning](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository.

```sh
git clone https://github.com/square/squaredev-multiple-payments-example.git
cd squaredev-multiple-payments-example
```

Install [Node.js (v16)](https://nodejs.org/en/about/releases/) which will include `npm`. This repository contains an `.nvmrc` file if you use [`nvm`](https://github.com/nvm-sh/nvm) to manage your node versions.

Then, to install dependencies run:

```sh
npm install
```

Run the development server.

```sh
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000).

### Credentials

Before you can run this example, you'll need to configure your developer credentials which can be found in the [Developer Dashboard](https://developer.squareup.com/apps).

Copy `.env.example` to `.env.sandbox`

```sh
cp .env.example .env.sandbox
```

Define `SQUARE_ACCESS_TOKEN` with your **Sandbox** Access Token from the Developer Dashboard.

```ini
SQUARE_ACCESS_TOKEN=eX@mpl3_t0k3n
```

Restart your server to use this new value.

_Remember: Do not add your access tokens to git!_

Edit `public/index.html`
Replace `{APP_ID}` and `{LOCATION_ID}` with your app id and default location id

```
const appId = 'sandbox-sq123-f@keApp1d';
const locationId = 'LHJ111123';
```
