# weekly25_react_typescript

```
npx create-react-app ui --template typescript
cd ui
npm i @material-ui/core @material-ui/icons
npm i react-query
npm i styled-components @types/styled-components
```

```
- src/App.tsx
- src/index.tsx
- react-app-env.d.ts
```

 - index.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render( <App />, document.querySelector('#root'));
```

 - App.tsx
```tsx
const App = () => {
  return (
    <div className="App">
      Strarting..
    </div>
  );
}
export default App;
```

### styled-components useState useQuery

index.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();
ReactDOM.render( 
  <QueryClientProvider client={client} >
    <App />
  </QueryClientProvider>
  , document.querySelector('#root'));
```

App.tsx
```tsx
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper } from './App.styles';
// Types
export type CartItemType =  {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = 
    useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  return (
    <div className="App">
      Strarting..
    </div>
  );
}
export default App;
```

App.styled.ts
```ts
import styled from 'styled-components';
export const Wrapper = styled.div``;
```

