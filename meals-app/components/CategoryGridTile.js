import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryGridTile;
