**This is a starter template for [Renderlesskit React Tailwind](https://github.com/timelessco/renderlesskit-react-tailwind).**

Must `yarn link` the [Renderlesskit React Tailwind repo](https://github.com/timelessco/renderlesskit-react-tailwind) after cloning using the tips below,

- Create a link of the library's repo by running this command directly in your terminal

```sh
cd node_modules/react && yarn link && ../.. && cd node_modules/react-dom && yarn link && ../.. && yarn link
```

- Now from this repo again use the command below to create a link

```sh
yarn link react && yarn link react-dom && yarn link @renderlesskit/react-tailwind
```
