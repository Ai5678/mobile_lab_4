import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask=(taskText) => {
    setTasks([...tasks,taskText]);
    };
  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
