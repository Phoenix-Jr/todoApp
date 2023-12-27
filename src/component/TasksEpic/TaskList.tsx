import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import TaskTile from "./TaskTile";

const TaskList: React.FC<propsTaskList> = ({
  data,
  onChangeStatus,
  onDeleteTask,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TaskTile
          task={item}
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
        />
      )}
    />
  );
};

export default TaskList;

interface propsTaskList {
  data: Itask[];
  onChangeStatus: (id: number) => void;
  onDeleteTask: (id: number) => void;
}
interface Itask {
  id: number;
  title: string;
  completed: boolean;
}
