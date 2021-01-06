import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from '../Comuns/Cabeca'
import ListaItens from '../Comuns/ListaItens'







const Comercializacao = ({navigation}) =>{

  return (
    <View style={estilos.container}>
<Cabeca titulo='Vender' 
subtitulo='para recompensar seu trabalho' 
descricao='aqui tem informações sobre diferentes coisas que o comércio envolve:' 
style={estilos.cabeca}/>

  <ListaItens style={estilos.ListaItens} 
  ids={['p1','p2','p3']}
  titulos={['Estoque','Escoamento da produção','Certificação orgânica']}
  descricoes={[
  'ferramenta para ajudar na organização e fluidez das vendas',
  'a comercialização pode ser de diferentes formas',
  'a forma de garantir a boa origem de seu produto',
  

  ]}
  
  subtitulosRevista = {[
  'importante saber o que tem',
  'vendendo aqui e ali',
  'confiança para o seu cliente',
  

  ]}
  conteudos = {[
    '',
    'Formas de Venda: Feira -  Ponto de Venda  -  Ponto de Venda Online  -  Entrega  -  Cestas prontas  -  Escolha dos produtos avulsos  -  Entrega Online  -  Cooperativas  -  CSA  -  Grupo de consumo responsável',
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


export default Comercializacao;

