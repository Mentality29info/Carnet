import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import CustomInput from '../../components/customInput'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import DropDownPicker from 'react-native-dropdown-picker'
import ModalDropdown from 'react-native-modal-dropdown'
import ModalSelector from 'react-native-modal-selector'

const DonnesScreen = () => {
    const { control, handleSubmit, watch } = useForm()
    const [customAge, setCustomAge] = useState('')

    const [selectedParent, setSelectedParent] = useState(null);

    const handleParentChange = (option) => {
        setSelectedParent(option.label);
    };

    const data = [
        { key: 1, label: 'Sélectionnez le parent' },
        { key: 2, label: 'Père' },
        { key: 3, label: 'Mère' },
    ]

    const navigation = useNavigation()

    const CalculerAgeGrossesse = () => {
        navigation.navigate('CalculerAgeGrossesse')
    }

    const handleCustomAgeChange = () => {
        setCustomAge();
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Entrer vos données svp ...</Text>
                <CustomInput
                    name="nom"
                    control={control}
                    placeholder="Votre nom svp ... "
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
                    placeholder="Votre prénom svp ... "
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
                    name="adresse"
                    control={control}
                    placeholder="Votre adresse svp ... "
                    rules={{
                        required: 'Votre adresse est obligatoire !',

                    }}
                />
                <CustomInput
                    name="profession"
                    control={control}
                    placeholder="Votre profession svp ... "
                    rules={{
                        required: 'Votre profession est obligatoire !',

                    }}
                />
                <View style={styles.container}>
                    <ModalSelector
                        data={data}
                        initValue="Sélectionnez le parent"
                        onChange={handleParentChange}
                        selectStyle={styles.dropdownContainer}
                        selectTextStyle={styles.dropdownText}
                        optionTextStyle={styles.dropdownItemText}
                        optionStyle={styles.dropdownItem}

                        rules={{
                            required: '',

                        }}>
                        <TouchableOpacity style={styles.dropdown}>
                            <Text style={styles.dropdownText}>{selectedParent || 'Sélectionnez le parent'}</Text>
                        </TouchableOpacity>

                    </ModalSelector>
                </View>

                <CustomInput
                    name="NombreEnfants"
                    control={control}
                    placeholder="Le nombre d'enfant que vous avez eu ... "
                    keyboardType="numeric"
                    rules={{
                        required: 'Le nombre d`enfant est obligatoire !',
                    }}
                />

                <CustomInput
                    name="age"
                    style={styles.input}
                    control={control}
                    value={customAge}
                    placeholder="Entrez votre âge svp ..."
                    onChangeText={handleCustomAgeChange}
                    keyboardType="numeric"
                    rules={{
                        required: 'Votre âge est obligatoire !',
                        minLength: {
                            value: 2,
                            message: 'Votre âge doit comporter au moins 2 caractères'
                        },
                        maxLength: {
                            value: 2,
                            message: 'Votre âge doit comporter au maximum 2 caractères'
                        }
                    }}
                />

                
                <CustomButton text="Suivant" onPress={handleSubmit(CalculerAgeGrossesse)} />
            </View>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        color: 'black'


    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    dropdownText: {
        fontSize: 16,
        color: 'black',

    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#333',
    },
    root: {
        alignItems: 'center',
        padding: 20,

    },
    text: {

        color: 'black',
        marginVertical: 10,
    },
    link: {
        color: 'blue',
    },
    input: {
        backgroundColor: 'pink',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    inpute: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    dropdownContainer: {
        height: 40,
        width: '100%',
    },
    dropdown: {
        backgroundColor: '#fafafa',
    },
    dropdownItem: {
        justifyContent: 'flex-start',
    },
})

export default DonnesScreen