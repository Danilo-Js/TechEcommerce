import React from 'react';
import { View } from 'react-native';
import { OrderConfirmation } from 'react-native-ecommerce-components';

const OrderConfirmationScreen = ({ navigation, route }: any) => {
  const {
    orderId,
    orderDate,
    totalAmount,
    paymentMethod,
    shippingAddress,
  } = route.params;

  const handleContinueShopping = () => {
    navigation.navigate('Início');
  };

  const handleViewOrderDetails = () => {
    navigation.navigate('Rastreio do produto', {
      orderId,
      orderDate,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <OrderConfirmation
        language="pt"
        title="Compra realizada"
        subTitle="Obrigado!"
        orderId={orderId}
        orderDate={orderDate}
        totalAmount={totalAmount}
        paymentMethod={paymentMethod}
        shippingAddress={shippingAddress}
        onContinueShopping={handleContinueShopping}
        onViewOrderDetails={handleViewOrderDetails}
      />
    </View>
  );
};

export default OrderConfirmationScreen;
