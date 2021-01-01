import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';




const App = () =>{

  return (

    <View style={estilos.container}>
    
      <Text style ={estilos.texto}>
        Agrofazer
      </Text>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}}
      style={estilos.imagem}/>

    </View>



  );
};


const estilos = StyleSheet.create({
  container:{flex:1 , justifyContent:'center', alignItems: 'center'},

  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },

  imagem: {
    width:100,
    height:100,
    borderRadius:20
  }
});


export default App;