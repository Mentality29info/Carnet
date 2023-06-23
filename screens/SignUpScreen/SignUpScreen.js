import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/customInput'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm()
    const pwd = watch('password')

    const navigation = useNavigation()


    const onRegisterPress = () => {
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')

    }

    const onTermsOfUsePress = () => {
        console.warn('onTermsOfUsePress')
    }

    const onPrivacyPolicyPress = () => {
        console.warn('onPrivacyPolicyPress')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Créer un compte</Text>
                <CustomInput
                    name="nom"
                    control={control}
                    placeholder="votre nom svp ... "
                    rules={{
                        required: 'Votre nom est obligatoire !',
                        minLength: {
                            value: 3,
                            message: 'Votre nom doit comporter au moins 3 caractères'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Votre nom doit comporter au maximum 24 caractères'
                        }

                    }}
                />
                <CustomInput
                    name="prenom"
                    control={control}
                    placeholder="votre prénom svp ... "
                    rules={{
                        required: 'Votre prénom est obligatoire !',
                        minLength: {
                            value: 3,
                            message: 'Votre prénom doit comporter au moins 3 caractères'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Votre prénom doit comporter au maximum 24 caractères'
                        }

                    }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="email@eamil.xxx"
                    rules={{
                        required: 'Adresse mail obligatoire',
                        pattern: { value: EMAIL_REGEX, message: 'Adresse mail invalide' },
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Mot de passe ..."
                    secureTextEntry
                    rules={{
                        required: 'Mot de passe est obligatoire !',
                        minLength: {
                            value: 8,
                            message: 'Le mot de passe doit comporter au moins 8 caractères',
                        },
                    }}
                />
                <CustomInput
                    name="password-repeat"
                    control={control}
                    placeholder="Répéter le mot de passe ..."
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || 'Le mot de passe ne correspond pas',
                    }}
                />
                <CustomButton text="Enregistrer" onPress={handleSubmit(onRegisterPress)} />


                <Text style={styles.text}>
                    En vous inscrivant, vous confirmez que vous acceptez nos{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePress}>Conditions d'utilisation </Text>et{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPress}>politique de confidentialité</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton
                    text="J'ai déjà un compte ? Se Connecter"
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
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: 'blue',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
})

export default SignUpScreen