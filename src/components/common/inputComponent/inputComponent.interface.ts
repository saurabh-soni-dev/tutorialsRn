import { StyleProp, ViewStyle, KeyboardType } from "react-native"

export interface InputComponentProps {
    conatinerStyle?: StyleProp<ViewStyle> | undefined
    lable?: string
    placeholder?: string
    placeHolderTextColor?: string
    // value?:inputValue
    setValue?: (value: string) => void
    error?: string
    secureTextEntry?: boolean
    hideText?: boolean
    secureText?: boolean
    keyboardType?: KeyboardType

}