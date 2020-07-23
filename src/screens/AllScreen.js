import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TODOS } from '../../assets/data';
import SingleTodoScr from '../screens/TodoScreen';


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

// const onToggleTodo = id => {
//   const matchesId = idx => x => x.id === idx
//   // Array.find :: [a] -> (a -> Boolean) -> a
//   const todo = todoList.find(matchesId(id)); // -> { id, body }
//   // 
//   todo.status = todo.status === 'Done' ? 'Active' : 'Done';
//   const foundIndex = todoList.findIndex(todo => todo.id === id);
//   todoList[foundIndex] = todo;
//   const newTodoList = [...todoList];
//   setTodoList(newTodoList);
// };

const config = Platform.select({
  web: { headerMode: 'screen'},
  default: {},
})

const AllStack = createStackNavigator(
  {
    All: AllScr
  },
  config
);

AllStack.path = '';

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
      onLongPress={() => onLongPress(props.todo)}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

const Stack = createStackNavigator();

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={SingleTodoScr}/>
  </Stack.Navigator>
</NavigationContainer>

/* React.Node 
   @props: 
    - `idx`: Number, 
    - `todo`: String || Any
    - `key`: String
    - `onToggleTodo`: Void => Any
    - `onDeleteTodo`: Void => Any
*/
const AllScr = (props) => {
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
      props.navigation.navigate('TodoScr', {
        updatedTodo: todo
      });
    }, 1000);
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <ImageBackground style={styles.container} source={{ uri: 'https://mondrian.mashable.com/wp-content%252Fgallery%252Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUlnumotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com' }}>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
    paddingTop: 1000
  }
});


export default AllScr;