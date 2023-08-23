import { SafeAreaView, Text, TextInput, View, Button } from 'react-native';
import { styles } from './styles/appStyles';
import { AddTodo } from './components/add-todo/addTodo';
import { TitleTodo } from './components/title-todo/TitleTodo';



export default function App() {

  return (
    <SafeAreaView style={styles.box}>
    <TitleTodo text={"TODO-APP"}></TitleTodo>
    <AddTodo></AddTodo>
    </SafeAreaView>
  );
}
