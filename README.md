# tezos-pepe-frontend
frontend for the https://tezospepe.com/ homepage.

## requirements
`yarn 1.22+`

to start developing:
1. `cd tezos-pepe-frontend`
2. `yarn`
3. `yarn dev`

## available commands
- `yarn dev`
runs dev server for dev server for extremely fast Hot Module Replacement (HMR).

- `yarn build`
bundles project with Rollup, pre-configured to output highly optimized static assets for production.
bundle can be found in `/dist` 

- `yarn deploy`
uses the built project from `/dist` and publishes on github pages. changes will reflect directly on the tezos pepe homepage.

## demo
### https://tezospepe.com
![image](https://github.com/tezospepe/tezos-pepe-frontend/assets/24196928/6581f11d-4ec9-41bf-abd8-4da49b9ff9fb)
