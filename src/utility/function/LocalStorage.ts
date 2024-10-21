import AsyncStorage from "@react-native-async-storage/async-storage"

const setItem = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
    }
}

const setObjectItem = async (key: any, value: string) => {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
    }
}

const getItem = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
    }
}

const getObjectItem = async (key: string) => {
    try {
        let jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (error) {

    }
}

const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key)
}

const clearAllLocalStorage = async () => {
    await AsyncStorage.clear()
}

export default {
    setItem,
    setObjectItem,
    getItem,
    getObjectItem,
    removeItem,
    clearAllLocalStorage
}