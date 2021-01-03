import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const Cabeca = ({titulo}) =>{

  return (

    <View style={estilos.cabeca}>
    
      <Text style ={estilos.texto}>
        {titulo}
      </Text>
    
    </View>

  );
};

// Cabeca.defaultProps = {
//   titulo: 'Agrofazer',
// }


const estilos = StyleSheet.create({
  cabeca:{
      top:15,
      height:60 ,
      padding:15,
      width:1000,
       backgroundColor:'#696bdb',
       backgroundColor:'#6365eb',
       backgroundColor:'#4c4ed9',
       
  },
  texto: {
    color: '#fff',
    fontSize: 28,
    textAlign:'center',
    fontWeight: 'bold',
    top:-10,
  },



});


export default Cabeca;