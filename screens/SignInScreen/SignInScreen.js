import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../assets/images/f.png'
import CustomInput from '../../components/customInput'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'


const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPress = data => {
        console.log(data)
        //Valider Utilisateur
        navigation.navigate('CalculerAgeGrossesse')
    }

    const onForgotPasswordPress = () => {
        //Mot de Passe Oublier
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp')
    }
    const DonneesScreen = () => {
        navigation.navigate('DonneesScreen')
    }
    return (


        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>

                <View>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.8 }]}
                        resizeMode="contain"
                    />
                    <Text style={styles.debut} >
                        Bienvenue dans notre Application Femmme Africaine Enceinte
                    </Text>
                </View>
                <CustomInput
                    name="username"
                    placeholder="Nom d'utilisateur ..."
                    control={control}
                    rules={{ required: 'Nom d`utilisateur est obligatoire !' }}
                />
                <CustomInput
                    name="password"
                    placeholder="Mot de passe ..."
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Mot de passe est obligatoire !',
                        minLength: {
                            value: 3,
                            message: 'Le mot de passe doit comporter au moins 3 caractères'
                        }
                    }}
                />

                <CustomButton text="Se Connecter" onPress={handleSubmit(onSignInPress)} />

                <CustomButton
                    text="Mot de passe oublié ?"
                    onPress={onForgotPasswordPress}
                    type="TERTIARY"
                />
                <CustomButton
                    text="Ouvrir sans se connecter"
                    onPress={DonneesScreen}
                    bgColor="#00008B"
                    fgColor="#FFFFFF"
                />

                <SocialSignInButton />

                <CustomButton
                    text="Vous n'avez pas de compte ? Créer compte ici ..."
                    onPress={onSignUpPress}
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
        backgroundColor: 'white'

    },
    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 200,
        marginVertical: 20,
    },
    debut: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'purple',

    }
})

export default SignInScreen