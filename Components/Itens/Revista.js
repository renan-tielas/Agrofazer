import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import CabecaRevista from '../Comuns/CabecaRevista'
import ListaItens from '../Comuns/ListaItens'







const Revista = ({route, navigation}) =>{
    const { titulo, conteudo, subtituloRevista } = route.params;


  

  return (
    <View style={estilos.container}>
<CabecaRevista titulo={titulo} 
subtitulo={subtituloRevista}
descricao='aqui tem informações sobre diferentes coisas que o plantio envolve:' 
style={estilos.cabeca}/>

{/* if 1 texto, 2, 3, 4, para intercalar com imagens */}
<Text style={estilos.conteudo}>{conteudo}</Text>

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
    top:-285,},

    conteudo: {
        fontSize: 20,
        position: 'absolute',
        fontWeight: 'bold',
        width: 380,
        // maxHeight:100,
        color:'#8c5a20', //roxo
        // color:'black',
        top:180,
        // left:-4,
        // alignItems:'center',
        textAlign:'justify'
      },
  cabeca:{
    fontFamily:'Serif',
    width:400,
  },
});


export default Revista;

