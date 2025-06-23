import React from 'react';
import { View } from 'react-native';
import { CategoryList } from 'react-native-ecommerce-components';
import { useCategoryContext } from '../context/CategoryContext';

const CategoryScreen = ({ navigation }: any) => {
  const { categories } = useCategoryContext();

  const handleCategorySelect = (category: any) => {
    navigation.navigate('Lista de produtos', { categoryId: category.id });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <CategoryList
        categories={categories}
        onSelectCategory={handleCategorySelect}
        title="Navegar entre as categorias"
        subTitle="Selecione uma categoria e veja seus produtos"
      />
    </View>
  );
};

export default CategoryScreen;
