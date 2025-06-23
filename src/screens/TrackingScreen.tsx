import React from 'react';
import { View } from 'react-native';
import { OrderTracking } from 'react-native-ecommerce-components';

const steps = [
  {
    id: '1',
    title: 'Pedido realizado',
    description: 'Seu pedido foi feito.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Pedido processado',
    description: 'Seu pedido está sendo processado.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Enviado',
    description: 'Seu pedido foi enviado.',
    status: 'current',
  },
  {
    id: '4',
    title: 'A caminho',
    description: 'Seu pedido está a caminho.',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Entregue',
    description: 'Seu pedido foi entregue.',
    status: 'pending',
  },
];

const TrackingScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <OrderTracking
        language="pt"
        title="Rastreie o produto"
        subTitle="Acompanhe o andamento da entrega"
        steps={steps as any}
      />
    </View>
  );
};

export default TrackingScreen;
