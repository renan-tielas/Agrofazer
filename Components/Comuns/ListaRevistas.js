import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';

import ItemLista from './ItemLista'
import AdicionaItem from './AdicionaItem'



// lista revistas slides e outro
const ListaItens = () =>{

const [itens, setItens ] = useState ([
  {id:Math.random()*1000, texto: 'Solo'},
  {id:Math.random()*1000, texto: 'Alimento'},
  {id:Math.random()*1000, texto: 'Semente'},
  {id:Math.random()*1000, texto: 'Planta'},
])

const adicionaItem = (texto) => {
if (!texto) {
  // Alert.alert('Erro','Por favor adicione um texto', 
  // {text:'Ok'});
  

  Alert.alert('Erro', 'Por favor adicione um texto', [
    { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: true });
} else {
  
  setItens(
    itemAnterior => {
      return [
        {id:Math.random()*1000,
        texto},
        ...itemAnterior]
    }
  )
}

}

const deletaItem = (id) => {
  setItens(
    itemAnterior => {
      return itemAnterior.filter(item => item.id !=id);

    }
  )
}


  return (

    <View style={estilos.container}>

    <FlatList  data={itens} 
    renderItem={({item}) =>(
      <ItemLista item={item}
      deletaItem={deletaItem}/>
    )}/>
    
      <AdicionaItem adicionaItem={adicionaItem}/>



    </View>

  );
};


const estilos = StyleSheet.create({
  container:{flex:1 ,
    // justifyContent:'center', 
    // alignItems: 'center'
  },

  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },

  imagem: {
    // width:100,
    // height:100,
    // borderRadius:20
  }
});


export default ListaMat;