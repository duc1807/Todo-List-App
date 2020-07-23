import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//Import screens
import CompleteScr from '../screens/CompleteScreen';
import ActiveScr from '../screens/ActiveScreen';
import AllScr from '../screens/AllScreen';
import SingleTodoScr from '../screens/TodoScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Todo" component={AllScr} />
      <HomeStack.Screen name="TodoDetail" component={SingleTodoScr} />
    </HomeStack.Navigator>
  );
}

const BotTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Complete" component={CompleteScr} />
        <Tab.Screen name="All" component={HomeStackScreen} />
        <Tab.Screen name="Active" component={ActiveScr} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BotTabNavigation;
