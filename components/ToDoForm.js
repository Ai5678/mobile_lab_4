import { StyleSheet, TextInput, View, Button } from 'react-native'
import React, {useState} from 'react'

export default function ToDoForm({addTask}) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
      if (taskText) {
        addTask(taskText);
        setTaskText('');
      }
    }
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new Task..." onChangeText={(text) => setTaskText(text)} value={taskText}/>
      <Button title="Add Task" onPress={handleAddTask}/>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 30,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
})