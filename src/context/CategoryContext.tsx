import React, { createContext, useContext, useState, ReactNode } from 'react';
import { categoriesModel } from '../models/CategoryModel';

// Definição do tipo para Categoria
export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

// Definição do tipo para o contexto de categorias
interface CategoryContextType {
  categories: Category[];
  addCategory: (category: Category) => void;
}

// Criação do contexto de categorias
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Provedor do contexto de categorias
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesModel);

  // Função para adicionar uma nova categoria
  const addCategory = (category: Category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Hook personalizado para usar o contexto de categorias
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext deve ser usado dentro de um CategoryProvider');
  }
  return context;
};
