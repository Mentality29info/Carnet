import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/customInput'

import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form';


const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm()
    const navigation = useNavigation()

    const onSendPress = (data) => {
        console.warn(data)
        navigation.navigate('NewPassword')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Réinitialisez votre mot de passe </Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Nom d'utilisateur ..."
                    rules={{
                        required: 'Nom d`utilisateur est obligatoire ! '
                    }}
                />

                <CustomButton text="Envoyer" onPress={handleSubmit(onSendPress)} />

                <CustomButton
                    text="Retour à Se connecter"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
})

export default ForgotPasswordScreen