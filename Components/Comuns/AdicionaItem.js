import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'



const AdicionaItem = ({titulo, adicionaItem}) =>{

    const [texto, setTexto] = useState ('');

    const onChange = (inputTexto) =>{
        setTexto(inputTexto)
    }

  return (

    <View>
        <TextInput placeholder= "Adicione um item ..." 
        onChangeText={onChange}
        style={estilos.input}/>

        <TouchableOpacity 
        onPress={() => adicionaItem(texto)}
        style ={estilos.botao}>
            <Text style={estilos.botaoTexto}>  <Icon name="plus" sizez={20}/>Adicionar item </Text>
        </TouchableOpacity>
        


    </View>
  );
};



const estilos = StyleSheet.create({
    
    input: {
        height:60,
        padding:8,
        fontSize: 16,
    },
    botao: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    botaoTexto:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign:'center',
    },

});


export default AdicionaItem;



/* Pode servir para:


- Lista de Afazeres e lembretes

- Adicionar anotação

- Adicionar Item na feira



- Adicionar Receita



*/
