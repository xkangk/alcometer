import React, { useState } from 'react'
import { Switch, Text, View, TextInput,StyleSheet } from 'react-native'
import { basicStyle, darkMode } from './Styles'
import NumericInput from 'react-native-numeric-input'
import { Button } from 'react-native-paper'
import { ScrollView } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import { useFonts } from 'expo-font';

export default function App () {
 


  const genders = [
    {label: "Male" , value: "male"},
    {label: "Female" , value: "female"}
  ]

  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [weight, setWeight] = useState(0)
  const [tulos, setTulos] = useState(0)
  const [gender, setGender] = useState(genders[0].value)

  const [mode, setMode] = useState(false)
   const theme = mode ? darkMode : basicStyle 



  function calculate () {
    const liters = bottles * 0.33
    const grams = liters * 8 * 4.5
    const burning = weight / 10
    const left = grams - burning * hours
    let result = 0

    if (!weight) {
      alert('Please insert weight')
      return (result = 0)
    }
    if (gender === 'male') {
      result = left / (0.7 * weight)
    } else {
      result = left / (0.6 * weight)
    }
    if (result < 0) {
      return setTulos((result = 0))
    } else {
      setTulos(result.toFixed(2))
    }
  }
  const [fontsLoaded] = useFonts({
    'Alkalami-Regular': require('./assets/fonts/Alkalami-Regular.ttf'),
    'GemunuLibre': require('./assets/fonts/GemunuLibre.ttf')
  });


  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>
      <View style={theme.container}>

            <Switch 
            value={mode} 
            onValueChange={()=>setMode((value) => !value)} 
            />

            <Text style={[theme.heading, {fontFamily: 'GemunuLibre'}]}>Alcometer</Text>
            <Text style={[theme.label,{fontFamily:'Alkalami-Regular'}]}>Weight:</Text>
            <TextInput
              style={theme.input}
              onChangeText={text => setWeight(text)}
              placeholder='In kilograms'
              keyboardType='numeric'
              maxLength={3}
            ></TextInput>

            <Text style={[theme.label,{fontFamily:'Alkalami-Regular'}]}>Bottles:</Text>
            <NumericInput
              onChange={v => setBottles(v)}
              value={bottles}
              totalWidth={250}
              totalHeight={50} 
              step={1}
              minValue={0}
              rounded
              rightButtonBackgroundColor={ mode ? "#039f9b": "#f07167"}
              leftButtonBackgroundColor={mode ? '#039f9b': "#f07167"}
              textColor={mode ? '#039f9b':'#A20B0B'}
              iconStyle={{ color: mode ? '#FFFAFB':'#fad3d8' }}
              borderColor={mode ? '#039f9b':'#f07167'}              
            />

          <Text style={[theme.label,{fontFamily:'Alkalami-Regular'}]}>Hours:</Text>

            <NumericInput
              onChange={v => setHours(v)}
              value={hours}
              totalWidth={250}
              totalHeight={50} 
              step={1}
              minValue={0}
              rounded
              rightButtonBackgroundColor={mode ? '#039f9b': "#f07167"}
              leftButtonBackgroundColor={mode ? '#039f9b': "#f07167"}
              textColor={mode ? '#039f9b':'#A20B0B'}
              iconStyle={{ color: mode ? '#FFFAFB':'#fad3d8' }}
              borderColor={mode ? '#039f9b':'#f07167'}

            />
              <RadioForm style={theme.radio}
                radio_props={genders}
                initial={0}
                onPress={value => setGender(value)}
                buttonColor={mode ? '#039f9b':'#A20B0B'}
                selectedButtonColor={mode ? '#039f9b':"#ce4257"}
                animation={true}
                labelColor={mode ? '#039f9b':'#A20B0B'}
                textColor={mode ? '#039f9b':'#A20B0B'}
                labelStyle={{
                  fontSize: 18,
                  left: 15,
                  color: mode ? '#FFFAFB':'#A20B0B',
                }}
                />

            <Text
              style={[
                theme.result,
                {
                  color:
                    tulos <= 0.3 ? 'green' : tulos <= 1.2 ? 'yellow' : 'red'
                }
              ]}
            >
              {tulos}
            </Text>

          <Button
            style={theme.button}
            icon='calculator-variant-outline'
            mode='contained'
            onPress={() => calculate()}
          >
            Laske
          </Button>
      </View>
    </ScrollView>
  )
}
