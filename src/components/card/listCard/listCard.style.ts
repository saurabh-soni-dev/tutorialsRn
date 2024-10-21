import { StyleSheet } from "react-native";
import color from "../../../theme/color";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: color.Primary,
        padding: 10,borderRadius:10
    }
})