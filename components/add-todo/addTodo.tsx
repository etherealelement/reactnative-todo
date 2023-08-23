import { FC } from "react";
import { Button, SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./addTodoStyles";

export const AddTodo: FC = () => {
	return (
		<SafeAreaView style={styles.addTodo}>
			<View style={styles.addTodoInner}>
				<TextInput 
                style={styles.addTodoinput}
                placeholder="useless placeholder"
                keyboardType="numeric"
                
                />
				<Button
					title="Add Task"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		</SafeAreaView>
	);
};
