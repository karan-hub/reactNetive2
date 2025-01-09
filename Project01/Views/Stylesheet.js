import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // display :'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Optional: You can change this
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    scrollView: {
        width: '100%',
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 40,
        backgroundColor: 'green', // Optional: You can change this
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    keypad: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#444444',
        borderRadius: 20,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    buttonTextOperator: {
        color: '#ff9800',
    },
    buttonTextClear: {
        color: '#e91e63',
        // width: 350,
        // backgroundColor:'blue'
      },
});


export default styles;
