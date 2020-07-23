import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TODOS from '../../assets/data'

const CompleteScr = () => {
    return (
        <View>
            <Text>Complete</Text>
        </View>
    )
}

export default CompleteScr;