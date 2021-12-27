# SchenklRadio Maps for workadventure

Wir wollen eine Assembly für den #rC3 stellen und hier unsere Map hosten :)

## Run locally

Since we use typescript as scripting language, it needs to be compiled to the `script.js` which is specified in the `main.json`. This is
done by node and inludes also the [Extended scripting features](https://workadventu.re/map-building-extra/about.md).

For installing all needed dependencies make sure npm > 14.x is installed. Then execute `npm install` to get all packages needed.

After `npm run start` the compiled `script.js` the repositroy content will be served on `http://localhost:8080`.
To test it locally use following link: https://play.workadventu.re/_/global/localhost:8080/main.json.

With `npm run build` the compiled `script.js` is build and will be located in the `dist/` folder.

## Serving the map to public

For serving all files and the `script.js` the compilation is done by GitHub Actions and will be served over the GitHub Pages mechanism. The
compiled `main.json` and all other files file are available on `http://schenklradio.github.io/maps-for-workadventure` after every push to
the main branch.
