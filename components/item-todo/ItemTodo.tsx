import { FC } from 'react';
import { View, Button, Text } from 'react-native';
import { ItemTodoProps } from './ItemTodo.props';

export const ItemTodo: FC<ItemTodoProps> = ({id, title, iscompleted}: ItemTodoProps):JSX.Element => {
    return <View>
        <Button 
        title="Удалить"
        color="#841584"/>
        <Text>{title}</Text>
    </View>;
};