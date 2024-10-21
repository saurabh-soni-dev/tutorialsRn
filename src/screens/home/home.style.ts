import { StyleSheet } from 'react-native';
import color from '../../theme/color';

const style = StyleSheet.create({
    shadow: {
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    container: {
        flex: 1,
        backgroundColor: color.black,
        padding:20
    },
    emptyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default style;
