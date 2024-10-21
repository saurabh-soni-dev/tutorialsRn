import LocalStorage from '../../utility/function/LocalStorage'
import { DashboardProps } from './dashboard.interface'

const dashboardController = (): DashboardProps => {
    const onSetItem = async () => {
        let user: any = { name: 'saurabh', age: 20, mobile: 7879299436 }
        await LocalStorage.setItem('@Username', "saurabh soni")
        await LocalStorage.setObjectItem("@user", user)
    }

    const onGetItem = async () => {
        let data = await LocalStorage.getItem('@Username')
        let user = await LocalStorage.getObjectItem('@user')
        console.log("data:", data)
        console.log("user:", user)
    }

    const onRemoveItem = async () => {
        await LocalStorage.removeItem("@Subscribe")
    }

    return { onSetItem, onGetItem, onRemoveItem }
}

export default dashboardController