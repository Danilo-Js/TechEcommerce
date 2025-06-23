import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-ecommerce-components';
import { Product, useProductContext } from '../context/ProductContext';

const HomeScreen = ({ navigation }: any) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const { products } = useProductContext();

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleNavigateToCategories = () => {
    navigation.navigate('Categorias');
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate('Detalhes do produto', { productId });
  };

  const renderProductItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.id)} style={styles.productItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TechEcommerce</Text>
      <Text style={styles.subtitle}>Um ecommerce simples de produtos de tecnologia</Text>
      <SearchBar onSearch={handleSearch} language="pt" />
      <Button color="#007bff" title="Ver Categorias" onPress={handleNavigateToCategories} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        ListEmptyComponent={<Text style={styles.emptyMessage}>Não foram encontrados produtos</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  productItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productTitle: {
    fontSize: 18,
    color: '#333',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default HomeScreen;
