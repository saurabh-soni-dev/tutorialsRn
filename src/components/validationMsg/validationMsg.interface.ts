import { StyleProp, TextStyle, ViewStyle } from "react-native"

export interface ValidationMsgProps {
    errorText?: string
    errorTextStyle?: StyleProp<TextStyle> | undefined
    errorContainerStyle?: StyleProp<ViewStyle> | undefined
}