import { SafeAreaView, Text, TextInput, View, Button } from 'react-native';
import { styles } from './styles/appStyles';
import { AddTodo } from './components/add-todo/addTodo';
import { TitleTodo } from './components/title-todo/TitleTodo';
import {useState} from "react"


export default function App() {


  return (
    <SafeAreaView style={styles.box}>
    <View style={styles.viewContainer}>
      <TitleTodo text={"TODO-APP"}></TitleTodo>
    <AddTodo></AddTodo>
    </View>


    </SafeAreaView>
  );
}
