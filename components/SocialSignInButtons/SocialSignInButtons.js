import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'



const SocialSignInButtons = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
    } = useForm();

    const onSignFacebook = () => {
        console.warn('onSignFacebook')
    }

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle')
    }

    return (
        <>
            <CustomButton
                text="Sign In with Facebook"
                onPress={onSignFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
        </>
    )
}
export default SocialSignInButtons