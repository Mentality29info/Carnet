import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';



const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm()

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data)
    navigation.navigate('HomeScreen')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirmer votre adresse mail </Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Nom d'utilisateur ..."
          rules={{
            required: 'Nom d`utilisateur est obligatoire !',
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Entrez votre code de confirmation"
          rules={{
            required: 'Le code de confirmation est obligatoire !',
          }}
        />

        <CustomButton text="Confirmer" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Renvoyer le code"
          onPress={onResendPress}
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen;