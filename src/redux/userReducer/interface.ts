export interface UserDataState {
    userData: UserDataProps | undefined
}

interface UserDataProps {
    name: string
    mobile: string
}