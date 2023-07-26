# Celes SKU Dashboard

This is the completed test for the Frontend Developer position at Celes. Below are the instructions to run the project:

Currently, two official plugins are available:

- Create a .env file with the following variables:

```VITE_URL_API_BASE=https://celes-app.myshopify.com/admin/api
   VITE_SHOPIFY_VERSION=/2023-04
   VITE_SHOPIFY_ACCESS_TOKEN=your_access_token
```

- Run `npm i` to install all dependencies

- Run `npm run dev` to run the proyect in develop

## Run the test suit

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Run `npm run dev` to see all the app test

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
