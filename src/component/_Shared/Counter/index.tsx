import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Counter: React.FC<propsCounter> = ({ nb, title }) => {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  nb: {
    fontWeight: "bold",
  },
  title: {
    color: "lightgrey",
  },
});

interface propsCounter {
  nb: number;
  title: string;
}
