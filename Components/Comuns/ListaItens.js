import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';

import ItemLista from './ItemLista';
import AdicionaItem from './AdicionaItem';

const ListaItens = ({ids, titulos, descricoes, conteudos, navigation, subtitulosRevista}) => {
  let itens =[]
  // }
  for (let i = 0; i < titulos.length; i++) {
    
    itens.push({id: ids[i], titulo:titulos[i], descricao:descricoes[i], conteudo:conteudos[i], subtituloRevista:subtitulosRevista[i]});
  }


  return (
    <View style={estilos.containerLista}>
      <FlatList
        data={itens}
        renderItem={({item}) => (
          <ItemLista item={item} style={estilos.ListaItens} navigation={navigation}/>
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  containerLista: {
    // flex:1 ,
    // justifyContent:'center',
    // alignItems: 'center'
    top: 150,
  },
  ListaItens: {
    // position:'relative',
    // left:40,
  },
  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },

  imagem: {
    // width:100,
    // height:100,
    // borderRadius:20
  },
});

export default ListaItens;
