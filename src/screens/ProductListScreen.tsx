import React from 'react';
import { Alert, View } from 'react-native';
import { ProductList } from 'react-native-ecommerce-components';
import { useProductContext } from '../context/ProductContext';
import { useCartContext } from '../context/CartContext';

const ProductListScreen = ({ navigation, route }: any) => {
  const { categoryId } = route.params;
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const filteredProducts = products.filter(p => p.categoryId === categoryId);

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1, name: product.title });
    Alert.alert('Produto adicionado ao carrinho', `${product.title} foi adicionado ao carrinho.`);
  };

  const handleProductPress = (product: any) => {
    navigation.navigate('Detalhes do produto', { productId: product.id });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ProductList
        language="pt"
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        onProductPress={handleProductPress}
        gridView={true}
        title="Navegar entre produtos"
        subTitle="Os melhores estão aqui"
        styles={{
          button: {
            backgroundColor: '#007bff',
          },
        }}
      />
    </View>
  );
};

export default ProductListScreen;
