import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from '../Comuns/Cabeca'
import ListaItens from '../Comuns/ListaItens'







const Beneficiamento = ({navigation}) =>{

  return (
    <View style={estilos.container}>
<Cabeca titulo='Beneficiar' 
subtitulo='valoriza seu produto' 
descricao='informações sobre diferentes formas de tratar e valorizar seu produto' 
style={estilos.cabeca}/>

  <ListaItens style={estilos.ListaItens} 
  ids={['b1','b2','b3','b4','b5','b6','b7','b8','b9']}
  titulos={['Receitas PANCs','Máquinas','Rotulagem']}
  descricoes={[
  'alimentos poucos conhecidos ou uso de partes “inusitadas” de alimentos já conhecidos',
  'para profissionalização de diversos tipos de processamento de alimentos',
  'pontos importantes a serem observados na embalagem de seu produto',
  

  ]}
  
  subtitulosRevista = {[
  'velhas conhecidas ou novas amigas',
  'vamos valorizar seu produto',
  'aparência e informação ',
  

  ]}
  conteudos = {[
    '',
    'Cada máquina:    Casos de uso     Vantagens     Desvantagens   ',
    '',
    
  ]}
  navigation={navigation}
  />
    </View>

  );
};







// ------------------ Estilos

const estilos = StyleSheet.create({

  cabeca:{
    fontFamily:'Serif',
    width:400,
  },
ListaItens:{
  position:'relative',
  left:40,
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

  },
  
  cabeca:{
    fontFamily:'Serif',
    width:400,
  },
});


export default Beneficiamento;

