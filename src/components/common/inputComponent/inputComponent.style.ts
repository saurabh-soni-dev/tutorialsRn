import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    lableText: {
        fontSize: 14, color: 'black'
    },
    containerStyle:{marginBottom:10},
    rowContainer: {
        // flex: 1,
        marginTop:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1, borderRadius: 10, backgroundColor: 'gray'
        , paddingHorizontal: 10
    },
    input: {
        color: 'white',
         fontSize: 14
    }
})

export default style