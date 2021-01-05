import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Sound from 'react-native-sound';
// Ter um áudio ao lado de cada item para descrever rapidamente o que ele é e contém
// um botãozinho de play mesmo

// dentro do item, ao abri-lo, ao final, possibilidade de compartilhar no zap com um texto convidativo automaticamente
const ItemLista = ({item, deletaItem, navigation}) => {


// SOM --------------------
  // sound = new Sound('motorcycle.mp3');

  // playSound = () => {
  //     this.sound.play() //errado
  // }
//  -------------------
  return (
    // onPress={playSound}
    <TouchableOpacity style={estilos.itemLista} 
    onPress={() =>
      navigation.navigate('Revista', {
        
        titulo: item.titulo ,
        conteudo: item.conteudo,
        subtituloRevista: item.subtituloRevista,
      })
    }>
      <View style={estilos.itemListaView}>
        <View style={estilos.itemListaTituloView}>
          <Text style={estilos.itemListaTitulo}>{item.titulo}</Text>
        </View>
        <Text style={estilos.itemListaTexto}>{item.descricao}</Text>

        {/* <Icon name="remove" size={40} color="firebrick" 
        onPress={() => deletaItem(item.id)} /> */}
        {/* <Image source={require('../Audios/audio1.mp3')}></Image> */}
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  // como lidar com telas maiores/menores?
  itemLista: {
    minWidth: 320,
    height: 140,
    padding: 15,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20,
    width: 300,
    // borderTopLeftRadius:0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,

    backgroundColor: '#f8f8f8',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 7,
    borderColor: '#8c5a20',
    backgroundColor: '#eee',
    justifyContent: 'center',

    // borderColor: 'red',
    borderWidth: 10,
    borderStyle: 'solid',
   
  },

  itemListaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor:'red',
    shadowOpacity:50,
    shadowRadius:20,
    // shadowOffset:,
  },
  itemListaTituloView: {
    backgroundColor: '#8c5a20', //marrom
    backgroundColor: '#DEC485', //marrom claro
    // backgroundColor: '#a6ffa1',
    // backgroundColor: '#7f9ff0',
    // backgroundColor: '#4c4ed9', // roxo
    left:-20,
    top: -42,
    borderRadius: 20,
    borderTopWidth:6,
    borderLeftWidth:6,
    borderColor:'#8c5a20',
    width: 314,
    // borderTopLeftRadius:0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent:'center',
    alignItems:'center',
  },
  itemListaTitulo: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign:'center',
    
    textShadowRadius:6 ,
    textShadowColor:'#8c5a20',
    
  },
  itemListaTexto: {
    fontSize: 16,
    position: 'absolute',
    fontWeight: 'bold',
    width: 290,
    maxHeight:100,
    color:'#8c5a20', //roxo
    // color:'black',
    top:12,
    left:-4,
    // alignItems:'center',
    textAlign:'justify'
  },
});

export default ItemLista;
