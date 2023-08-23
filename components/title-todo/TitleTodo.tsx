import { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TitleTodoProps } from './TitleTodo.props';
import { titleStyles } from './TitleTodoStyles';


export const TitleTodo: FC<TitleTodoProps> = ({text, ...props}:TitleTodoProps):JSX.Element => {
    return <SafeAreaView>
        <Text
        style={titleStyles.title}
        >{text}</Text>
    </SafeAreaView>;
};