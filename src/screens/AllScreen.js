import React, { useState } from 'react';
import { ScrollView, ImageBackground, KeyboardAvoidingView, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { TODOS } from '../../assets/data';
import styles from '../../assets/styles/Style_AllScreen';


// ✗ Todo Items
/* 
ToDoItems :: React.ComponentProps -> React.Node
*/

/* 
interface ToDo = {
  id: Number,
  body: String, 
  status: Enum<String>  
} 

Enum<String> :: ['DONE', 'ACTIVE']
*/

const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
  };

  const onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}>
        <Text style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
    </TouchableOpacity>
  );
};

const Stack = createStackNavigator();

/* React.Node 
   @props: 
    - `idx`: Number, 
    - `todo`: String || Any
    - `key`: String
    - `onToggleTodo`: Void => Any
    - `onDeleteTodo`: Void => Any
*/
function AllScr({ navigation }) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };

  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      navigation.navigate('TodoDetail', {
        updatedTodo: todo
      });
    }, 500);
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const link = 'https://mondrian.mashable.com/wp-content%252Fgallery%2' + 
               '52Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1' + 
               '280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUln' + 
               'umotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com';
  return (
    <ImageBackground style={styles.container} source={{ uri: link }}>
      <KeyboardAvoidingView
        enabled
        behavior="padding">
        <ScrollView style={{ flex: 1 }}>
          <View>
            <View style={styles.container}>
              {todoList.map((todo, idx) => {
                return (
                  <TodoItem
                    idx={idx}
                    todo={todo}
                    key={todo.body}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                  />
                );
              })}

              <View style={styles.inputContainer}>
                <TextInput
                  value={todoBody}
                  style={styles.todoInput}
                  onChangeText={text => setTodoBody(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default AllScr;