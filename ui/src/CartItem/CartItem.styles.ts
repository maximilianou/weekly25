// CartItem/CartItem.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid grey;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .buttons, .information {
     display: flex;
     justify-content: space-beetwen;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px; 
  }
`;