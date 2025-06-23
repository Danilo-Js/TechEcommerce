import React, { createContext, useContext, useState, ReactNode } from 'react';
import { productsModel } from '../models/ProductModel';

// Definição do tipo para Produto
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
}

// Definição do tipo para o contexto de produtos
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

// Criação do contexto de produtos
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provedor do contexto de produtos
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productsModel);

  // Função para adicionar um novo produto
  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado para usar o contexto de produtos
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext deve ser usado dentro de um ProductProvider');
  }
  return context;
};
