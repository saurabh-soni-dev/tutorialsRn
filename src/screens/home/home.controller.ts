import React, { useState } from 'react'
import { HomeProps } from './home.interface'
import { AuthNavigationProps } from '../../navigation/stacks/authStack';
import { useNavigation } from '@react-navigation/native';

const homeController = (): HomeProps => {
    const navigation = useNavigation<AuthNavigationProps>();
    const [refreshing, setRefreshing] = useState<boolean>(false)

    const onNavigate = (name: string) => {
        navigation.navigate(name)
    }

    return {
        refreshing,
        setRefreshing,
        onNavigate
    }
}

export default homeController