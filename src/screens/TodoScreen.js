import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

function SingleTodoScr({route, navigation}) {
  const { updatedTodo } = route.params;
  const id = updatedTodo.id;
  const status = updatedTodo.status;
  const body = updatedTodo.body;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
      {id}.{status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

export default SingleTodoScr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 50
  }
});