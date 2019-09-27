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

---

## Usage

### is
```
const Test = styled.div`
  ${is('enabled')`color: green`};
`;
const Example = () => <Test enabled>test</Test>;
```

### isnt
```
const Test = styled.div`
  ${isnt('enabled')`color: green`};
`;
const Example = () => <Test>test</Test>;
```

### isAny
```
const Test = styled.div`
  ${isAny('size', ['small', 'medium'])`color: green`};
`;
const Example = () => <Test size="small">test</Test>;
```

### isntAny
```
const Test = styled.div`
  ${isntAny('size', ['small', 'medium'])`color: green`};
`;
const Example = () => <Test size="large">test</Test>;
```

### value
```
const Test = styled.div`
  width: ${value('size')};
`;
const Example = () => <Test size="4rem">test</Test>;
```

### swap
```
const Test = styled.div`
  color: ${swap('enabled', 'green', 'red')};
`;
const Example = () => <Test enabled>test</Test>;
```

### choose
```
const sizes = {
  small: '10px',
  medium: '20px',
  large: '30px',
};
const Test = styled.div`
  width: ${choose('size', sizes)};
`;
const Example = () => <Test size="medium">test</Test>;
```

### over
```
const Test = styled.div`
  ${over('amount', 10)`color: green`};
`;
const Example = () => <Test amount={11}>test</Test>;
```

### under
```
const Test = styled.div`
  ${under('amount', 10)`color: green`};
`;
const Example = () => <Test amount={9}>test</Test>;
```

### minWidth
```
const Test = styled.div`
  ${minWidth(420)`
    display: flex;
  `}
`;
```

### maxWidth
```
const Test = styled.div`
  ${maxWidth(420)`
    display: flex;
  `}
`;
```

### minHeight
```
const Test = styled.div`
  ${minHeight(420)`
    display: flex;
  `}
`;
```

### maxHeight
```
const Test = styled.div`
  ${maxHeight(420)`
    display: flex;
  `}
`;
```

### rem
```
const Test = styled.div`
  height: ${rem(420)};
`;
```

### opacify
```
const Test = styled.div`
  background: ${opacify('#FFFFFF', 0.5)};
  color: ${opacify('rgba(0, 0, 0, 0.5)', 0.2)};
`;
```

### transparentize
```
const Test = styled.div`
  background: ${transparentize('#FFFFFF', 0.5)};
  color: ${transparentize('rgba(0, 0, 0, 0.7)', 0.4)};
`;
```

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
