import { StyleSheet, Text, Platform, SafeAreaView } from "react-native";
import Header from "./src/component/_Shared/Header";
import TaskContainer from "./src/component/TasksEpic/TaskContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
