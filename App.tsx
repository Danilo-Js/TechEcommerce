import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { ProductProvider } from './src/context/ProductContext';
import { CategoryProvider } from './src/context/CategoryContext';
import { ReviewProvider } from './src/context/ReviewContext';
import { CartProvider } from './src/context/CartContext';

const App = () => {
  return (
    <ProductProvider>
      <CategoryProvider>
        <ReviewProvider>
          <CartProvider>
            <AppNavigator />
          </CartProvider>
        </ReviewProvider>
      </CategoryProvider>
    </ProductProvider>
  );
};

export default App;
