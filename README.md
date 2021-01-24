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
```
npm run start
```

### Item Cart styled-component Typed

App.tsx
```tsx
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
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

  const getTotalItems =  () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const removeFromCart = () => null;

  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} /> 
          </Grid>
        ))}

      </Grid>
    </Wrapper>
  );
}
export default App;

```
Item.tsx
```tsx
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
  <Wrapper>
    <img src={item.image} alt={item.title} ></img>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>$ {item.price}</h3>
    </div>
    <Button onClick={ () => handleAddToCart(item)} > Add to Cart</Button>
  </Wrapper>
);

export default Item;
```

Item.styles.ts
```ts
import styled from 'styled-components';

export  const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid grey;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

  }
`;
```

### Cart open, add, amount

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();
ReactDOM.render( 
  <QueryClientProvider client={client} >
    <App />
  </QueryClientProvider>, 
  document.querySelector('#root'));
```

```tsx
// App.tsx
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from './App.styles';
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

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = 
    useQuery<CartItemType[]>('products', getProducts);

  console.log(data);

  const getTotalItems =  (items: CartItemType[]) => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const removeFromCart = () => null;

  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong ...</div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={ () => setCartOpen(false) }> 
        Cart goes here
      </Drawer>
      <StyledButton onClick={ ( ) => setCartOpen(true)} >
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} /> 
          </Grid>
        ))}

      </Grid>
    </Wrapper>
  );
}
export default App;
```

```ts
// App.styles.ts
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
```

```tsx
// Item.tsx
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
  <Wrapper>
    <img src={item.image} alt={item.title} ></img>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>$ {item.price}</h3>
    </div>
    <Button onClick={ () => handleAddToCart(item)} > Add to Cart</Button>
  </Wrapper>
);

export default Item;
```

```ts
// item.styled.ts
import styled from 'styled-components';

export  const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightred;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

  }
`;
```

### Cart Menu Empty Items

```tsx
// App.tsx
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from './App.styles';
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

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = 
    useQuery<CartItemType[]>('products', getProducts);

  console.log(data);

  const getTotalItems =  (items: CartItemType[]) => 
    items.reduce( (acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong ...</div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={ () => setCartOpen(false) }> 
        <Cart cartItems={cartItems}  
              addToCart={handleAddToCart} 
              removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={ ( ) => setCartOpen(true)} >
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} /> 
          </Grid>
        ))}

      </Grid>
    </Wrapper>
  );
}
export default App;

```

```tsx
// Cart/Cart.tsx
import CartItem from '../CartItem/CartItem';
// Styles
import { Wrapper } from './Cart.styles';
// Types
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;

};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Empty Cart</p> : null }
      {cartItems.map( (item) => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
```

```ts
// Cart/Cart.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

`;
```

```tsx
// CartItem/CartItem.tsx
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

const CartItem: React.FC = () => <div>Cart Item</div>;

export default CartItem;

```

```ts
// CartItem/CartItem.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;
```

