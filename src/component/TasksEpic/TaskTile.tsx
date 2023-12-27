import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const TaskTile: React.FC<Itask> = ({ task, onChangeStatus, onDeleteTask }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChangeStatus(task.id)}
    >
      <View style={styles.subContainer}>
        <Image
          style={styles.icon}
          source={
            task.completed
              ? require("../../../assets/images/icon_check.png")
              : require("../../../assets/images/icon_circle.png")
          }
        />
        <Text
          style={[
            styles.title,
            { color: task.completed ? "lightgrey" : "black" },
          ]}
        >
          {task.title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/icon_bin.png")}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: { marginLeft: 10 },
  icon: {
    width: 30,
    height: 30,
  },
});

interface Itask {
  task: { id: number; title: string; completed: boolean };
  onChangeStatus: (id: number) => void;
  onDeleteTask: (id: number) => void;
}
