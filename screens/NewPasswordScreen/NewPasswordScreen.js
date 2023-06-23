import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = (data) => {
    console.warn(data)
    navigation.navigate('HomeScreen')
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Réinitialisez votre mot de passe</Text>

        <CustomInput
          placeholder="Nom d'utilisateur ..."
          name="username"
          control={control}
          rules={{
            required: 'Nom d`utilisateur est obligatoire !'
          }}
        />

        <CustomInput
          placeholder="Renseigner le code ..."
          name="code"
          control={control}
          rules={{
            required: 'Le code est obligatoire'
          }}
        />

        <CustomInput
          placeholder="Entrez votre nouveau mot de passe"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Mot de passe est obligatoire ',
            minLength: {
              value: 8,
              message: 'Le mot de passe doit comporter au moins 8 caractères',
            },
          }}
        />

        <CustomButton text="Soumettre" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Retour à Se connecter"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

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
    
  },
  text: {
    color: 'gray',
    marginVertical: 10,
   
  },
  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;