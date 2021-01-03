import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import { v4 as uuidv4 } from 'uuid';

import ItemLista from './ItemLista'
import AdicionaItem from './AdicionaItem'

const Busca = ({descricao}) =>{


    const [inputTexto, setTexto] = useState ('');

    const onChange = (inputTexto) =>{
        setTexto(inputTexto)
    }


const casoDeBusca = 1 ; 

    
const fazBusca = (inputTexto) => {
    if (!inputTexto) {
      // Alert.alert('Erro','Por favor adicione um texto', 
      // {text:'Ok'});
      
    
      Alert.alert('Erro', 'Por favor escreva sua busca', [
        { text: "OK", onPress: () => console.log("Busca pressionada") }
        ],
        { cancelable: true });
    } else {
      
      // setItens(
      //   itemAnterior => {
      //     return [
      //       {id:Math.random()*1000,
      //       texto},
      //       ...itemAnterior]
      //   }
      // )
    }
    
    }

  return (

    <View >

<View>
    
        <TextInput placeholder= {descricao}
        onChangeText={onChange}
        style={estilos.input}/>

        <TouchableOpacity 
        onPress={() => fazBusca(inputTexto)}
        style ={estilos.botao}>
            <Text style={estilos.botaoTexto}>Busca</Text><Icon style={estilos.icone} name="search" size={25}/>
        </TouchableOpacity>
        



    </View>

    </View>

  );
};


const estilos = StyleSheet.create({
  container:{
    //   flex:2 ,
    // justifyContent:'center', 
    // alignItems: 'center'
  },
  botao: {
    // height:60,
    backgroundColor: '#8c5a20',
    padding: 9,
    margin: 5,
    flexDirection:'row',
    justifyContent:'space-around',
    top:100,
    borderRadius:10,
    
},
  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  input: {
      top:100,
    height:50,
    padding:8,
    paddingHorizontal:20,
    marginBottom:10,
    fontSize: 20,
    backgroundColor:'#feffef',
    borderRadius:10,
},

icone:{
    top: 2,
    color:'#fcf9f5'

},

botaoTexto:{
    color: '#fcf9f5',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'bold',
    // alignSelf:'center',
},

 
});


export default Busca;


//BUSCA ENCONTRAR PALAVRAS EM QUALQUER LUGAR DO APP, E LISTAR RESULTADOS EM MINIATURAS.
//  - > Titulo da revista - Frase na qual está a palavra ou palavras

//Para isso acima é preciso que sejam feitos cartões de busca, para cada revista, miniatura, etc que tenha no site,
// > então a partir disso ter uma função que pegue todos os termos de busca desses cartões e o id do cartão
// > e a partir do id do cartão exibir os cartões que tem relevancia para a busca
// > pode ser feito uma hierarquia de pesos de diferentes categorias de palavras (titulo, subtitulo, corpo ...) 
//   para relevancia da busca

/* Código antigo





import { Dimensions } from 'react-native';
   const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
 









*/