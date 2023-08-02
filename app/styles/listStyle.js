import {StyleSheet} from "react-native";

const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#151515',
    },
    fab: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 40,
        right: 30,
        height: 70,
        backgroundColor: '#2b825b',
        borderRadius: 100,
    },
})

export default listStyle;