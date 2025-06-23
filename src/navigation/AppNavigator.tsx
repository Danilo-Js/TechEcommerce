/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import TrackingScreen from '../screens/TrackingScreen';
import ProductReviews from '../screens/ProductReviews';
import EvilIcons from '@react-native-vector-icons/evil-icons';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Início"
        screenOptions={({
          navigation,
        }) => ({
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 16,
                padding: 4,
              }}
              onPress={() => navigation.navigate('Carrinho de compras')}
            >
              <EvilIcons name="cart" size={40} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Categorias" component={CategoryScreen} />
        <Stack.Screen name="Lista de produtos" component={ProductListScreen} />
        <Stack.Screen name="Detalhes do produto" component={ProductDetailScreen} />
        <Stack.Screen name="Carrinho de compras" component={CartScreen} />
        <Stack.Screen name="Pagamento" component={CheckoutScreen} />
        <Stack.Screen name="Compra confirmada" component={OrderConfirmationScreen} />
        <Stack.Screen name="Rastreio do produto" component={TrackingScreen} />
        <Stack.Screen name="Avaliações do produto" component={ProductReviews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
