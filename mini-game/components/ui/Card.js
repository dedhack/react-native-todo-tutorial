import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4, // android only property
    shadowColor: "black", // ios only property
    shadowOffset: { width: 0, height: 2 }, // ios only property
    shadowRadius: 6, // ios only property
    shadowOpacity: 0.25, // ios only property
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
  },
});
