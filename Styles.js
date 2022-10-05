import {StyleSheet} from "react-native";
import { StatusBar} from 'react-native';


export const basicStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8edeb',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (StatusBar.currentHeight || 0),
      paddingBottom: 100 
    },
    label: {
      fontSize: 20,
      color: "#A20B0B",
      marginTop: 5,

    },    
    input: {
      backgroundColor: "white",
      width: "90%",
      borderWidth: 2,
      borderStyle: "dotted",
      borderColor: "#A20B0B",
      padding: 10,
    },
    heading: {
      color: "#A20B0B",
      fontSize: 80,
      paddingBottom: 50,
      textAlign: "center",
    },

    result: {
      fontSize: 30,
    },
    button: {
      padding: 10,
      backgroundColor:"#A20B0B"
    },
    radio: {
      paddingTop: 15,

      
    },


  });

  export const darkMode = StyleSheet.create({
    container: {
      ...basicStyle.container,
      backgroundColor: '#00312e',

    },
    label:{
      ...basicStyle.label,
      backgroundColor: "rgba(51, 153, 137, 0)",
      color: "white",
      
    },
    heading: {
      ...basicStyle.heading,
      color: "#82e6e3",

    },
    input: {
      ...basicStyle.input,
      textColor: "#82e6e3",
      borderColor: "#039f9b",
    },
    result: {
      fontSize: 30,
    
    },
    button: {
      ...basicStyle.button,
      backgroundColor:"#25bcb8"
    },    
    radio: {
      paddingTop: 15,
      color: "#9e0008",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      
    },


  });
