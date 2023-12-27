import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import CountersContainer from "./CountersContainer";
import FloatingButton from "../_Shared/FloatingButton";

const TaskContainer = () => {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onAddTask = (title: string) => {
    const newTask = { title, completed: false, id: new Date().getTime() };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id: number) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) t.completed = !t.completed;
      return t;
    });
    setTasks(newTasks);
  };

  const onDeleteTask = (id: number) => {
    const newListTask = tasks.filter((item) => item.id !== id);
    setTasks(newListTask);
  };

  const getTasksCompleted = (): number => {
    return tasks.filter((t) => t.completed).length;
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <View style={styles.container}>
      {isFormOpen && <TaskForm onAddTask={onAddTask} />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={getTasksCompleted()}
      />
      <TaskList
        data={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
      />
      <FloatingButton toggleForm={toggleForm} isOpen={isFormOpen} />
    </View>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    position: "relative",
  },
});
interface Itask {
  id: number;
  title: string;
  completed: boolean;
}
