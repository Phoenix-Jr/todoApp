import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FloatingButton: React.FC<propsFloatingButton> = ({
  isOpen,
  toggleForm,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleForm}>
      <Text style={styles.title}>{isOpen ? "+" : "-"}</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 35,
  },
});

interface propsFloatingButton {
  toggleForm: () => void;
  isOpen: boolean;
}
