import React, { createContext, useContext, useState } from 'react';
import { itemsList } from 'data/itemsList';

interface ListItem {
  label: string;
  active?: boolean;
  onClick?: () => void;
  introText?: {
    title: string;
    subtitle: string;
    description: string[];
  };
}

interface ItemContextType {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  items: ListItem[];
  selectedItem: ListItem;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [items, setItems] = useState<ListItem[]>(itemsList);

  const selectedItem = items[selectedIndex];

  return (
    <ItemContext.Provider value={{ selectedIndex, setSelectedIndex, items, selectedItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};

export type { ListItem, ItemContextType }; 