import { View, Text, FlatList } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

// can be defined outside because we don't need to re-create it every time
const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default CategoriesScreen;
