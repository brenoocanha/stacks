import React from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import { TaskList } from '../../components/TaskList';
import { useTaskList } from '../../context/TasksContext';

export const Home = (): React.JSX.Element => {

  const [newTask, setNewTask] = React.useState('');
  const { addTask } = useTaskList();

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };
    addTask(data);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput
          style={styles.input}
          placeholder='Nova tarefa...'
          placeholderTextColor='#555'
          onChangeText={setNewTask}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas Tarefas</Text>
        <TaskList />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#F1F1F1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#F1F1F1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292E',
    color: '#F1F1F1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#EBA417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292E',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#F1F1F1',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
