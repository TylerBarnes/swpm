# CLI Packages

This is a cheat sheet that you can use as a handy reference for [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/) and [bun](https://bun.sh/) commands.

> Note: `<package>` follow this structure `<package[@latest|@#.#.#]>`

## Package Commands

| TODO | command                                     | swpm                                    | npm                                                 | yarn                                            | pnpm                                            | bun                                  |
| ---- | ------------------------------------------- | --------------------------------------- | --------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ------------------------------------ |
| [ ]  | clean cache                                 |                                         | `npm cache clean`                                   | `yarn cache clean`                              |                                                 |                                      |
| [x]  | install from `package.json`                 | `swpm install`                          | `npm install`                                       | `yarn [install]`                                | `pnpm install`                                  | `bun install`                        |
| [x]  | don't read or generate a lockfile           | `swpm install --package-lock`           | `npm install --no-package-lock`                     | `yarn install --no-lockfile`                    |  N/A                                            | N/A                                  |
| [ ]  | don't generate a lockfile                   |                                         |                                                     | `yarn install --pure-lockfile`                  |                                                 |                                      |
| [x]  | lockfile is not updated                     | `swpm install --frozen`                 | `npm ci`                                            | `yarn install --immutable`                      | `pnpm install --frozen-lockfile`                | `bun install --no-save`              |
| [x]  | add package                                 | `swpm add <package> [--global]`         | `npm install <package> [--location=global]`         | `yarn [global] add <package>`                   | `pnpm add <package> [--global]`                 | `bun add <package> [--global]`       |
| [x]  | add package as `dependencies`               | `swpm add <package>`                    | `npm install <package>`                             | `yarn add <package>`                            | `pnpm add <package>`                            |                                      |
| [x]  | add package as `devDependencies`            | `swpm add <package> --save-dev`         | `npm install <package> --save-dev`                  | `yarn add <package> --dev`                      | `pnpm add <package> --save-dev`                 |                                      |
| [x]  | add package as `optionalDependencies`       | `swpm add <package> --save-optional`    | `npm install <package> --save-optional`             | `yarn add <package> --optional`                 | `pnpm add <package> --save-optional`            |                                      |
| [x]  | add package as `peerDependencies`           | `swpm add <package> --save-peer`        | `npm install <package> --save-peer`                 | `yarn add <package> --peer`                     | `pnpm add <package> --save-peer`                |                                      |
| [x]  | add exact version                           | `swpm add <package> --save-exact`       | `npm install <package> --save-exact`                | `yarn add <package> --exact`                    | `pnpm add <package> --save-exact`               |                                      |
| [x]  | remove package                              | `swpm remove [<package>] [--global]`    | `npm uninstall <package> [--location=global]`       | `yarn [global] remove <package>`                | `pnpm uninstall <package> [--global]`           | `swpm remove [<package>] [--global]` |
| [x]  | remove package as `dependencies`            | `swpm remove <package>`                 | `npm uninstall <package>`                           | `yarn remove <package>`                         | `pnpm uninstall <package>`                      | `swpm remove <package>`              |
| [x]  | remove package as `devDependencies`         | `swpm remove <package> --save-dev`      | `npm uninstall <package> --save-dev`                | `yarn remove <package> --dev`                   | `pnpm uninstall <package> --save-dev`           |                                      |
| [x]  | remove package as `optionalDependencies`    | `swpm remove <package> --save-optional` | `npm uninstall <package> --save-optional`           | `yarn remove <package> --optional`              | `pnpm uninstall <package> --save-optional`      |                                      |
| [x]  | remove package as `peerDependencies`        | `swpm remove <package> --save-peer`     | `npm uninstall <package> --save-peer`               | `yarn remove <package> --peer`                  | `pnpm uninstall <package> --save-peer`          |                                      |
| [x]  | update package (no `package.json`)          | `swpm update [<package>] [--global]`    | `npm update [<package>] [--location=global]`        | `yarn [global] upgrade [<package>]`             | `pnpm update [<package>] [--global]`            |                                      |
| [x]  | upgrade package on `package.json`           | `swpm upgrade <package> [--global]`     | `npm install <package>@latest [--location=global]`  | `yarn [global] upgrade <package> --latest`      | `pnpm update <package> --latest [--global]`     | N/A                                  |
| [x]  | upgrade interactive                         | `swpm interactive`                      | N/A                                                 | `yarn upgrade-interactive`                      | `pnpm update --interactive`                     | N/A                                  |
| [ ]  | list all package at the top level           |                                         | `npm list --depth 0 [--location=global]`            | `yarn [global] list --depth 0`                  | `pnpm list --depth 0 [--global]`                |                                      |
| [ ]  | audit vulnerable dependencies               |                                         | `npm audit [fix]`                                   | `yarn audit`                                    | `pnpm audit [--fix]`                            |                                      |

## Shared Commands

Use the same command structure between package managers.

| TODO | command                                | swpm                                         | npm                                            | yarn                                            | pnpm                                            | bun                              |
| ---- | -------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | -------------------------------- |
| [x]  | init or create                         | `swpm init`                                  | `npm init`                                     | `yarn init`                                     | `pnpm init`                                     | `bun init`                       |
| [x]  | login/logout                           | `swpm <login\|logout>`                       | `npm <login\|logout>`                          | `yarn <login\|logout>`                          | `pnpm <login\|logout>`                          |                                  |
| [x]  | run scripts                            | `swpm run <script>`                          | `npm run <script>`                             | `yarn run <script>`                             | `pnpm [run] <script>`                           | `bun run <script>`               |
| [x]  | run test                               | `swpm test`                                  | `npm test`                                     | `yarn test`                                     | `pnpm test`                                     |                                  |
| [x]  | crate bundle package                   | `swpm build`                                 | `npm build`                                    | `yarn build`                                    | `pnpm build`                                    |                                  |
| [x]  | publish                                | `swpm publish`                               | `npm publish`                                  | `yarn publish`                                  | `pnpm publish`                                  |                                  |
| [x]  | unpublish                              | `swpm unpublish <package>[@#.#.#]`           | `npm unpublish <package>[@#.#.#]`              | `yarn unpublish <package>[@#.#.#]`              | `pnpm unpublish <package>[@#.#.#]`              |                                  |
| [x]  | deprecate                              | `swpm deprecate <package>[@#.#.#] <message>` | `npm deprecate <package>[@#.#.#] <message>`    | `yarn deprecate <package>[@#.#.#] <message>`    | `pnpm deprecate <package>[@#.#.#] <message>`    |                                  |
| [x]  | config list                            | `swpm config list`                           | `npm config list`                              | `yarn config list`                              | `pnpm config list`                              |                                  |
| [x]  | config `--save-default` as default     | `swpm config set save-exact true`            | `npm config set save-exact true`               | `yarn config set save-exact true`               | `pnpm config set save-exact true`               |                                  |
| [x]  | config `~` as default instead `^`      | `swpm config set save-prefix '~'`            | `npm config set save-prefix '~'`               | `yarn config set save-prefix '~'`               | `pnpm config set save-prefix '~'`               |                                  |
| [x]  | list outdated packages                 | `swpm outdated [<package>] [--global]`       | `npm outdated [<package>] [--location=global]` | `yarn [global] [<package>] outdated`            | `pnpm outdated [<package>] [--global]`          |                                  |
| [x]  | link local package                     | `swpm link`                                  | `npm link [<folder>]`                          | `yarn link [<folder>]`                          | `pnpm link [<folder>]`                          | `bun link [<folder>]`            |
| [x]  | unlink local package                   | `swpm unlink`                                | `npm unlink [<folder\|package> --no-save]`     | `yarn unlink [<folder\|package>]`               | `pnpm unlink [<folder\|package>]`               | `bun unlink [<folder\|package>]` |

## Run Remotely

Run a command without installing it.

| TODO | command                                | swpx             | npm                                          | yarn                                            | pnpm                                            | bun              |
| ---- | -------------------------------------- | ---------------- | -------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ---------------- |
| [x]  | run package                            | `swpx <package>` | `npx <package>`                              | `yarn dlx <package>`                            | `pnpm dlx <package>`                            | `bunx <package>` |

---

## CLI documentation

- [npm](https://docs.npmjs.com/cli/v9/commands)
- [yarn](https://classic.yarnpkg.com/en/docs/cli/)
- [pnpm](https://pnpm.io/cli/install)
- [bun](https://github.com/oven-sh/bun#using-bun-as-a-package-manager)
