import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SingleTodoScr from './src/screens/TodoScreen';

//Import Bottom Tab Navigation
import BotTabNavigation from './src/navigation/BotTabNavigation';
import AllScr from './src/screens/AllScreen';

const Stack = createStackNavigator();

export default function App() {
  // const CompleteStack = createStackNavigator(
  //   {
  //     Complete: SingleTodoScr
  //   },
  //   config
  // );

  // CompleteStack.navigationOptions = {
  //   tabBarLabel: 'Complete',
  //   tabBarIcon: ({ focused }) => (
  //     <TabBarIcon
  //       focused={focused}
  //       name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-link'}
  //     />
  //   )
  // };
  
  // CompleteStack.path = '';
  return (
      <BotTabNavigation>
        
      </BotTabNavigation>

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
