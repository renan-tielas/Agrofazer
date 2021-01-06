import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from '../Comuns/Cabeca'
import ListaItens from '../Comuns/ListaItens'







const Apoio = ({navigation}) =>{

  return (
    <View style={estilos.container}>
<Cabeca titulo='Apoio' 
subtitulo='todos precisam de uma força' 
descricao='como conseguir apoio dos seus vizinhos e também do governo:' 
style={estilos.cabeca}/>

  <ListaItens style={estilos.ListaItens} 
  ids={['a1','a2','a3','a4','a5','a6','a7','a8','a9']}
ti  titulos={['Conhecendo a vizinhança','Organização comunitária','Políticas Públicas','Mapa de políticas','As políticas','    ',]}
  descricoes={[
  'você conhece as diferentes pessoas que trabalham com agricultura em seu território?',
  'se reunir com seus vizinhos e parceiros de trabalho para resolver problemas',
  'leis destinadas à apoiar agricultores, com diferentes condições',
  'diferentes políticas públicas pelos estados do Brasil',
  'Política Nacional de Alimentação Escolar (PNAE); Programa de Aquisição de Alimentos (PAA) e a (PNAPO)',
  
  

  ]}
  
  subtitulosRevista = {[
  'em coletivo os resultados são maiores',
  'a comunidade pode resolver muita coisa',
  'o governo pode te apoiar',
  'conheça políticas públicas na sua área',
  'alimentando com saúde, gerando renda',
  


  ]}
  conteudos = {[
    '',
    '',
    'O que são políticas públicas; O que elas podem fazer por você; O que você precisa; DAP; Elegibilidade na proposta; Qual o compromisso?;',
    '',
    
    'Política nacional de alimentação escolar: conectando produtores de alimentos saudáveis com escolas públicas de todo o país --- Programa de aquisição de alimentos: através desta política é possível que instituições públicas adquiram alimentos saudáveis por um preço justo                                               --- Programa Nacional de Produção Orgânica',
    '',
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


export default Apoio;

