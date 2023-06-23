import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './navigation'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'pink'
  },
})

export default App