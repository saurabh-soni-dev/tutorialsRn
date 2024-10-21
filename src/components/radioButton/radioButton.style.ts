import { StyleSheet } from "react-native";
import color from "../../theme/color";

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkedImageStyle: {
        height: 20,
        width: 20,
        tintColor: 'green'
    },
    unCheckedImageStyle: {
        height: 20,
        width: 20,
        tintColor: color.black
    },
    titleText: {
        fontSize: 16,
        color: color.black,
        marginLeft: 5
    }
})

export default style