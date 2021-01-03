import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,NavigationContainer,TouchableHighlight,Button} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';

import Cabeca from './Components/Cabeca'
import ListaMat from './Components/ListaMat'
import AdicionaItem from './Components/AdicionaItem'
import Busca from './Components/Busca'
const App = () =>{

  return (
    // <NavigationContainer>
<View style={estilos.container}>
  
    <View>
    <Cabeca titulo='AgroFazer' style={estilos.cabeca}/>
    </View>
    <View >
   
    {/* <TouchableHighlight onPress={this.imageTouched}> */}
    <Image 
      // source={require('./Imagens/flor4.jpg')}
      //COMENTARIO
      style={estilos.imagem}/>
      {/* </TouchableHighlight> */}
    

      <View>
      <TouchableOpacity 
        onPress={() => adicionaItem(texto)}>
          
    <Text style ={estilos.plantio}>
        Plantar
      </Text>
      </TouchableOpacity>
      </View>
      <View>
      <Text style ={estilos.beneficiamento}>
        Beneficiar
      </Text>
      </View>
      <View>
      <Text style ={estilos.comercializacao}>
        Vender
      </Text>
      </View>
      <View>
      <Text style ={estilos.politica}>
        Apoio
      </Text>
      </View>
    </View>
    <Busca descricao='O que está procurando?'/>
    {/* <AdicionaItem/> */}
    </View>

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