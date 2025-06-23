import React from 'react';
import { View } from 'react-native';
import { ReviewAndRatings } from 'react-native-ecommerce-components';
import { useReviewContext } from '../context/ReviewContext';

const ProductReviews = ({ route }: any) => {
  const { productId } = route.params;
  const { reviews, addReview } = useReviewContext();

  const productReviews = reviews.filter(r => r.productId === productId);

  const averageRating =
    productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;

  const onAddReview = (review: any) => {
    addReview({
      ...review,
      id: productReviews.length + 1 + '',
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      productId,
    });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <ReviewAndRatings
        language="pt"
        reviews={productReviews}
        averageRating={averageRating}
        totalReviews={productReviews.length}
        onAddReview={onAddReview}
        title="Opiniões dos clientes sobre o produto"
        subTitle="Veja as avaliações"
      />
    </View>
  );
};

export default ProductReviews;
