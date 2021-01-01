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
      height:60 ,
      padding:15,
       backgroundColor:'darkslateblue',
  },
  texto: {
    color: '#fff',
    fontSize: 23,
    textAlign:'center'
  },



});


export default Cabeca;