import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';

import Inicio from './Components/Inicio'
import Plantio from './Components/Plantio/Plantio'
import Beneficiamento from './Components/Beneficiamento/Beneficiamento'
import Comercializacao from './Components/Comercializacao/Comercializacao'
import Apoio from './Components/Apoio/Apoio'
import Cabeca from './Components/Comuns/Cabeca'
import ItemLista from './Components/Comuns/ItemLista'
import AdicionaItem from './Components/Comuns/AdicionaItem'
import Busca from './Components/Comuns/Busca'
import Revista from './Components/Itens/Revista'



const Stack = createStackNavigator();


const App = () =>{

  return (

    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="Inicio"
      component={Inicio}
      // options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="ItemLista" component={ItemLista} />
    <Stack.Screen name="Plantio" component={Plantio} />
    <Stack.Screen name="Beneficiamento" component={Beneficiamento} />
    <Stack.Screen name="Comercializacao" component={Comercializacao} />
    <Stack.Screen name="Apoio" component={Apoio} />

    <Stack.Screen name="Revista" component={Revista} />

    </Stack.Navigator>
    </NavigationContainer>

  );
};


// FAZER TITULOS À MÃO - PLANTAR, BENEFICIAR, VENDER, 
// FAZER ANOTAÇÕES À MÃO INDICANDO FUNCIONALIDADES






// ------------------ Estilos

const estilos = StyleSheet.create({

  cabeca:{
    fontFamily:'Serif',
    width:400,
  },

  container:{flex:1 ,
    // justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#d9fac8',
    backgroundColor: '#e0fad2',
    backgroundColor: '#fff5bd',

    // backgroundColor: '#fbffb3',
  },

  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  plantio: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    left: 95,
    top:-285,

    // backgroundColor: '#c2bad8',
    // padding: 9,
    // margin: 5,
    
    // shadowOffset:{  width: 10,  height: 10,  },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    // elevation: 5,  
  },
  beneficiamento: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    left: 220,
    top:-240
    

  },

  comercializacao: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    left: 40,
    top:-170

  },

  politica: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    left: 185,
    top:-115,
    // borderColor:'#fff',

  
  },

  imagem: {
    width:360,
    height:360,
    borderRadius:200,
    // borderColor:'#fcd260',
    // borderWidth:6,
    // borderStyle:'solid',
   
    alignItems: 'center',
    marginTop:100,
    marginLeft:7,
  
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,

  }
});


export default App;





/* Código antigo





import { Dimensions } from 'react-native';
   const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
 









*/