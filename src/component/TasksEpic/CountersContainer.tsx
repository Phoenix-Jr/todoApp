import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Counter from "../_Shared/Counter";

const CountersContainer: React.FC<propsCounter> = ({
  nbTasks,
  nbTasksCompleted,
}) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasksCompleted} title={"Tâches créés"} />
      <Counter nb={nbTasksCompleted} title={"Tâches complétées"} />
    </View>
  );
};

export default CountersContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 4,
  },
});

interface propsCounter {
  nbTasks: number;
  nbTasksCompleted: number;
}
