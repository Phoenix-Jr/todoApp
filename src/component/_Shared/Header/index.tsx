import { StyleSheet, Text, View } from "react-native";
import React from "react";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const Header = () => {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {days[date.getDay()] +
          ", " +
          date.getDate() +
          " " +
          months[date.getMonth()]}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
