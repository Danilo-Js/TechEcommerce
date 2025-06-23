// File: src/context/ReviewContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { reviewsModel } from '../models/ReviewModel';

// Definição do tipo para Avaliação
export interface Review {
  id: string;
  productId: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

// Definição do tipo para o contexto de avaliações
interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Review) => void;
}

// Criação do contexto de avaliações
const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

// Provedor do contexto de avaliações
export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>(reviewsModel);

  // Função para adicionar uma nova avaliação
  const addReview = (review: Review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

// Hook personalizado para usar o contexto de avaliações
export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviewContext deve ser usado dentro de um ReviewProvider');
  }
  return context;
};


