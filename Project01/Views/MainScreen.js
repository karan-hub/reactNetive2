import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './Stylesheet'; // Ensure the correct path to Stylesheet.js

const MainScreen = () => {
    const buttons = [
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['.', '0', '=', '/'],
        ['C'],
    ];

    const [expression, setExpression] = React.useState('');
    const handleButtonPress = (button) => {
        // console.log(expression);
        setExpression(expression + button)

    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.text}>{expression}</Text>
            </ScrollView>

            {/* Keypad */}
            <View style={styles.keypad}>
                {buttons.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((button, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => handleButtonPress(button)}
                            >
                                <Text style={[
                                    styles.buttonText,
                                    (button === 'C' && styles.buttonTextClear),
                                    (['+', '-', '*', '/'].includes(button) && styles.buttonTextOperator)
                                ]}>{button}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default MainScreen;
