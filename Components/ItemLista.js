import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const ItemLista = ({item, deletaItem}) =>{
 

    return (

    <TouchableOpacity style={estilos.itemLista}>
    
      <View style ={estilos.itemListaView}>
        <Text style={estilos.listItemText}>
    {
    item.texto

    }
        </Text>
        <Icon name="remove" size={40} color="firebrick" 
        onPress={() => deletaItem(item.id)} />
      </View>
    
    </TouchableOpacity>

  );
};



const estilos = StyleSheet.create({

    itemLista: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },

    itemListaView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems :'center',
    },

    itemListaTexto :{
        fontSize:18
    }

});


export default ItemLista;