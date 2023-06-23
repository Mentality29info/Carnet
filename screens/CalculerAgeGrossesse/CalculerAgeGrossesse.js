import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';

const CalculerAgeGrossesse = () => {

  const navigation = useNavigation()
  const { height } = useWindowDimensions();
  

  const [dernieresRegles, setDernieresRegles] = useState(new Date());
  const [ageGrossesse, setAgeGrossesse] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const calculerAgeGrossesse = () => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const joursGrossesse = 280; // 280 jours correspondent à 40 semaines

    const dateDernieresRegles = dernieresRegles || new Date();
    const dateActuelle = new Date();

    const differenceTemps = dateActuelle.getTime() - dateDernieresRegles.getTime();
    const ageJours = Math.floor(differenceTemps / millisecondsPerDay);

    const ageSemaines = Math.floor(ageJours / 7);
    const resteJours = ageJours % 7;

    const dateFinGrossesse = new Date(dateActuelle.getTime() + (joursGrossesse - ageJours) * millisecondsPerDay);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateFinGrossesse.toLocaleDateString('fr-FR', options);


    setAgeGrossesse(
      `Vous êtes enceinte de ${ageSemaines} semaine(s) et ${resteJours} jour(s). La date estimée de fin de grossesse est le ${formattedDate}.`
    );
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setDatePickerVisible(false);
    if (selectedDate) {
      setDernieresRegles(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcul de l'âge de la grossesse</Text>
      <Text style={styles.label}>Date des dernières règles :</Text>
      <Button title="Sélectionner une date" onPress={showDatePicker} />
      {datePickerVisible && (
        <DateTimePicker
          value={dernieresRegles}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()} // Empêche la sélection de dates futures
        />
      )}
      <TextInput style={styles.selectedDate}>
        {dernieresRegles.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
      </TextInput>
      <Button title="Calculer" onPress={calculerAgeGrossesse} />
      <Text
        style={styles.result}>{ageGrossesse}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black'
  },
  label: {
    fontSize: 24,
    marginBottom: 8,
    color: 'black'
  },
  selectedDate: {
    alignItems: 'center',
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'black',



  },
});

export default CalculerAgeGrossesse