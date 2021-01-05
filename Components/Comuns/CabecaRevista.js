import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


//idéia : AgroFazer emm letra roxa
// te ajuda a fazer seus trabalhos em fundo roxo, letra igual ao fundo
// depois de 10 segundos some com um roll up
// permanece só o AgroFazer
// Scroll View não deixa o AgroFazer fixo
// Assim que puxado para cima o AgroFazer volta

//// Se puxado mais pra cima volta o "te ajuda a fazer seu trabalho"






const CabecaRevista = ({titulo,subtitulo,descricao, cor}) =>{

  return (

    <View style={estilos.cabeca}>
    
      <Text style ={estilos.titulo}>
        {titulo}
      </Text>

      <Text style ={estilos.subtitulo}>
        {subtitulo}
        {/* //como fazer fade out?? */}
      </Text>
      <View style={estilos.descricaoV}>
      <Text style ={estilos.descricao}>
      {/* {descricao} */}
     
    </Text>
    </View>
      

    </View>

  );

};

// CabecaRevista.defaultProps = {
//   titulo: 'Agrofazer',
// }


const estilos = StyleSheet.create({
  cabeca:{
      top:15,
      height:60 ,
      padding:15,
      width:1000,
      //  backgroundColor:'#696bdb',
      //  backgroundColor:'#6365eb',
      //  backgroundColor:'#4c4ed9',
       
  },

    titulo: {
    color: '#fff',
    color:'#4c4ed9',
    color:'#8c5a20',
    fontSize: 28,
    textAlign:'center',
    fontWeight: 'bold',
    top:-10,
  },

  subtitulo: {
    height:36 ,
    color: '#fff',
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    top:0,
    backgroundColor:'#4c4ed9',
    backgroundColor: '#8c5a20', //marrom
    // backgroundColor: '#DEC485', //marrom claro
  },
  descricao: {
    height:186 ,
    width: 360,
    color:'#4c4ed9',
    // color: '#fff',
    fontSize: 22,
    textAlign:'justify',
    // fontWeight: 'bold',
    top:0,
    // backgroundColor:'#4c4ed9',
    flexWrap:'wrap',
  },
  descricaoV: {
    top:10,
    // height:26 ,
    maxWidth: 400,
    maxHeight: 400,
    alignSelf:'center',
    
  },



});


export default CabecaRevista;