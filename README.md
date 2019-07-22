# Dynamic Routing with next-i18next example

## How to use

```bash
git clone https://github.com/lazidoca/dynamic-routing-next-i18next-app
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example shows usage of dynamic routing.

This example contains two dynamic pages:

1. `pages/post/[id]/index.js`
   - e.g. matches `/post/my-example` (`/post/:id`)
1. `pages/post/[id]/[comment].js`
   - e.g. matches `/post/my-example/a-comment` (`/post/:id/:comment`)

These routes are automatically matched by the server.
You can use `next/link` as displayed in this example to route to these pages client side.
