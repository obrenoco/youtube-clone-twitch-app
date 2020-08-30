import React from 'react';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

import { 
  Container, 
  CategoryContainer, 
  CategoryImage, 
  CategoryName, 
  CategoryStatus, 
  RedCircle, 
  Info, 
  List
  } from './styles';

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle/>
        <Info>51,0K</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
