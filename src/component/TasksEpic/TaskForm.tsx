import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const TaskForm: React.FC<propsTaskForm> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = (value: string) => {
    setTitle(value);
  };
  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={title} onChangeText={_onChangeText} />
      </View>
      <Button title="Ajouter" onPress={_onPressBtn} />
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 7,
  },
});

interface propsTaskForm {
  onAddTask: (title: string) => void;
}
