# styled-tidy
Tidy is a lightweight set of utilities for writing clean styled-components syntax.

![](https://badgen.net/github/release/dw2/styled-tidy) [![CircleCI](https://circleci.com/gh/dw2/styled-tidy.svg?style=svg)](https://circleci.com/gh/dw2/styled-tidy) ![](https://badgen.net/badgesize/gzip/https://unpkg.com/styled-tidy) ![Codecov](https://codecov.io/gh/dw2/styled-tidy/branch/master/graph/badge.svg)

## Installation
Add the dependency:
```
yarn add styled-tidy
```
And then in your component(s):
```
// grab the helpers you want
import { is, swap, rem, minWidth } from 'styled-tidy';
```

## Usage
 + [Matchers](https://github.com/dw2/styled-tidy/wiki/Matchers)
 + [Media Queries](https://github.com/dw2/styled-tidy/wiki/Media-Queries)
 + [Mixins](https://github.com/dw2/styled-tidy/wiki/Mixins)

---

## Contributing
styled-tidy follows semantic release versioning with Commitizen.

### Committing
Install commitizen globally, if you have not already.
```
npm install -g commitizen
```
When you are ready to commit your changes&hellip;
```
git add .
git cz
```
Then, follow the CLI wizard.

**Note:** *Choosing 'feat' or adding 'BREAKING CHANGE' in the commit will
result in a major version bump during the release.*

### Testing
```
nvm use
yarn
yarn test
```

### Additional Commands
Keep things tidy ;)
```
yarn lint
```

Test that your changes compile
```
yarn build
```

## License
MIT
