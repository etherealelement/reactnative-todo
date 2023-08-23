import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    addTodo: {
        flex: 1,
        width: 400,
        maxHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addTodoInner: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 20
    },

    addTodoinput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
      },
    
})