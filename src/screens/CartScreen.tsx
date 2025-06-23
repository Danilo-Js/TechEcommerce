import React from 'react';
import { View } from 'react-native';
import { ShoppingCart } from 'react-native-ecommerce-components';
import { useCartContext } from '../context/CartContext';

const CartScreen = ({ navigation }: any) => {
  const { cartItems, updateQuantity, removeFromCart, totalAmount } = useCartContext();

  const handleCheckout = () => {
    navigation.navigate('Pagamento');
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <ShoppingCart
        language="pt"
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
        title="Carrinho de Compras"
        subTitle={`Valor total: R$ ${totalAmount.toFixed(2)}`}
      />
    </View>
  );
};

export default CartScreen;
