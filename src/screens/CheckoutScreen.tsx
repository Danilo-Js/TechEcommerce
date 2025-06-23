import React from 'react';
import { View } from 'react-native';
import { PaymentGateway } from 'react-native-ecommerce-components';
import { useCartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation }: any) => {
  const { totalAmount, clearCart } = useCartContext();

  const handlePayment = (paymentDetails: {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    billingAddress?: string;
  }) => {
    // Processar pagamento com os detalhes fornecidos
    // Após o processamento bem-sucedido:
    clearCart();
    navigation.navigate('Compra confirmada', {
      orderId: 'ORD12345',
      orderDate: new Date().toLocaleDateString(),
      totalAmount,
      paymentMethod: 'Cartão de Crédito',
      shippingAddress: paymentDetails.billingAddress || 'Endereço não informado',
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <PaymentGateway
        language="pt"
        title="Realize o pagamento"
        subTitle="Apenas pagamentos por cartão são aceitos no momento"
        onPaymentSubmit={handlePayment}
        styles={{
          button: {
            backgroundColor: '#007bff',
          },
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
