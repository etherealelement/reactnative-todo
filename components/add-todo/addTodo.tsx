import { FC } from "react";
import { Button, SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./addTodoStyles";
import {useState} from "react";
import { ItemTodoProps } from "../item-todo/ItemTodo.props";


export const AddTodo: FC = () => {
	const [todos, setTodos] = useState<ItemTodoProps[]>([]);
	const [inputValue, setInputValue] = useState("");

	const addTodo = () => {
		let newTask:ItemTodoProps = {
			id: +(new Date()),
			title: inputValue,
			iscompleted: false,
		}

		setTodos([...todos, newTask])
	}


	return (
		<SafeAreaView style={styles.addTodo}>
			<View style={styles.addTodoInner}>
				<TextInput 
                style={styles.addTodoinput}
                placeholder="useless placeholder"
                keyboardType="numeric"
                onChangeText={e => setInputValue(e)}
                />
				<Button
					title="Add Task"
					color="#841584"
					onPress={addTodo}
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		</SafeAreaView>
	);
};
