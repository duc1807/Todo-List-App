import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
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
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Complete") {
            iconName = focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle';
          } else if (route.name === 'All') {
            iconName = focused ? 'md-add-circle' : 'md-add-circle';
          } else if (route.name === 'Active') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle';
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Complete" component={CompleteScr} />
        <Tab.Screen name="All" component={HomeStackScreen} />
        <Tab.Screen name="Active" component={ActiveScr} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BotTabNavigation;
