import { useDispatch, useSelector } from "react-redux"
import { saveUserData } from "../../redux/userReducer/action"
import { RootState } from "../../redux/types"

const reduxImplementationController = () => {

    const dispatch = useDispatch()

    const userData = useSelector((state: RootState) => state.UserReducer)

    console.log("userdata:", userData)

    const data: any = { name: 'saurabh', mobile: '1234567890' }
    const onStoreData = () => {
        dispatch(saveUserData(data))
    }
    const onGetData = () => { }
    return { onStoreData, onGetData }
}

export default reduxImplementationController