import {StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16
    },
    input: {
      flex: 1,
      backgroundColor: '#1f1625',
      height: 56,
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    buttonText: {
      color: '#fff',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 42,
      marginTop: 36
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  });
  