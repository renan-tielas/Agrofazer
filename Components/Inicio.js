import React, {useState} from 'react';
// import { TouchableOpacity} from 'react-native-gesture-handler'

import {View, Text, Image, StyleSheet, NavigationContainer,TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from './Comuns/Cabeca'
import Busca from './Comuns/Busca'







const Inicio = ({navigation}) =>{

  return (

<View style={estilos.container}>
  
    <View>
    <Cabeca titulo='AgroFazer' subtitulo='ajuda a fazer seus trabalhos' style={estilos.cabeca}/>
    </View>

    <View >
   
    {/* <TouchableHighlight onPress={this.imageTouched}> */}
    <Image 
      source={require('../Imagens/flor4.jpg')}
      style={estilos.imagem}/>
      {/* </TouchableHighlight> */}
    

      <View>
      <TouchableOpacity 
      style ={estilos.opacity} 
        onPress={() =>
          navigation.navigate('Plantio')
        }
        >
    <Text  style ={estilos.plantio} >
        Plantar
      </Text>
      </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity 
      style ={estilos.opacityB} 
        onPress={() =>
          navigation.navigate('Beneficiamento')
        }
        >
    <Text  style ={estilos.beneficiamento} >
        Beneficiar
      </Text>
      </TouchableOpacity>
      </View>



    





      <View>
      <TouchableOpacity 
      style ={estilos.opacityC} 
        onPress={() =>
          navigation.navigate('Comercializacao')
        }
        >
    <Text  style ={estilos.comercializacao} >
        Vender
      </Text>
      </TouchableOpacity>
      </View>




      <View>
      <TouchableOpacity 
      style ={estilos.opacityP} 
        onPress={() =>
          navigation.navigate('Apoio')
        }
        >
    <Text  style ={estilos.politica} >
        Apoio
      </Text>
      </TouchableOpacity>
      </View>



    </View>
    <Busca descricao='O que está procurando?'/>
    {/* <AdicionaItem/> */}
    </View>

  );
};







// ------------------ Estilos

const estilos = StyleSheet.create({


  opacity:{
    position: 'absolute',
    left: 100,
    top:-285,
  },

  cabeca:{
    fontFamily:'Serif',
    width:400,
  },

  container:{flex:1,
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
    
  },
  opacityB:{
    position: 'absolute',
    left: 220,
    top:-240
  },
  comercializacao: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
   

  },
  opacityC:{
    position: 'absolute',
    left: 40,
    top:-170
  },

  politica: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    
    // borderColor:'#fff',

  
  },
  opacityP:{
    position: 'absolute',
    left: 185,
    top:-115,
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


export default Inicio;

