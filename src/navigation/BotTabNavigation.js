import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import screens
import CompleteScr from '../screens/CompleteScreen';
import ActiveScr from '../screens/ActiveScreen';
import AllScr from '../screens/AllScreen';
import SingleTodoScr from '../screens/TodoScreen';

const Tab = createBottomTabNavigator();

const BotTabNavigation = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name= "Complete" component={CompleteScr} />
            <Tab.Screen name= "All" component={AllScr} />
            <Tab.Screen name= "Active" component={ActiveScr} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BotTabNavigation;
