import React from 'react';
import { View, Button } from 'react-native';
import { ProductDetail } from 'react-native-ecommerce-components';
import { useProductContext } from '../context/ProductContext';
import { useCartContext } from '../context/CartContext';

const ProductDetailScreen = ({ navigation, route }: any) => {
  const { productId } = route.params;
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const product = products.find(p => p.id === productId);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }
    addToCart({ ...product, quantity: 1, name: product.title });
    navigation.navigate('Carrinho de compras');
  };

  const handleBuyNow = () => {
    if (!product) {
      return;
    }
    addToCart({ ...product, quantity: 1, name: product.title });
    navigation.navigate('Pagamento');
  };

  const handleNavigate_Reviews = () => {
    navigation.navigate('Avaliações do produto', { productId });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Button title="Ver Avaliações" onPress={handleNavigate_Reviews} />
      {product && (
        <ProductDetail
          language="pt"
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          title="Conheça o produto"
          subTitle="Veja as informações do produto"
          styles={{
            image: {
              resizeMode: 'contain',
            },
          }}
        />
      )}
    </View>
  );
};

export default ProductDetailScreen;
