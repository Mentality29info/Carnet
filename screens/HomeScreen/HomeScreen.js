import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handlePhoneNumberSubmit = () => {
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Veuillez entrer votre numéro de téléphone');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError('Le numéro de téléphone doit comporter 10 chiffres');
    } else {
      setPhoneNumberError('');
      // Envoyer le numéro de téléphone à votre backend ou effectuer d'autres actions
      console.log('Numéro de téléphone:', phoneNumber);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        keyboardType="phone-pad"
        onChangeText={handlePhoneNumberChange}
        value={phoneNumber}
      />
      <Button title="Valider" onPress={handlePhoneNumberSubmit} />
      {phoneNumberError ? (
        <Text style={styles.error}>{phoneNumberError}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default PhoneNumberInput;
