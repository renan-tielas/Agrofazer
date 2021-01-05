import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from '../Comuns/Cabeca'
import ListaItens from '../Comuns/ListaItens'







const Plantio = ({navigation}) =>{

  return (
    <View style={estilos.container}>
<Cabeca titulo='Plantar' 
subtitulo='onde tudo começa' 
descricao='aqui tem informações sobre diferentes coisas que o plantio envolve:' 
style={estilos.cabeca}/>

  <ListaItens style={estilos.ListaItens} 
  ids={['p1','p2','p3','p4','p5','p6','p7','p8','p9']}
  titulos={['Sementes','Calendário de Plantio','Consórcios','Podas','Adubação Verde','Caldas e Pesticidas','Agrotóxicos','Organização do Trabalho','Maquinário']}
  descricoes={[
  'Grupo de Revista, Lista de Itens e Ferramenta sobre Sementes',
  'Slides e ou Ferramenta de calendário de plantio',
  'Lista de itens e Ferramenta para te auxiliar a fazer consórcios entre plantas',
  'Revista sobre podas: por quê fazer e como',
  'Revista sobre adubo que você planta',
  'Revista sobre caldas e pesticidas para sua plantação',
  'Revista sobre os venenos dos Agrotóxicos',
  'Grupo de Revistas sobre como você pode organizar seu trabalho de produzir',
  'Lista de Itens de maquinário, qual uso e vantagens',
  'I itens R revista S slides F ferramenta G grupo de'
  ]}
  
  subtitulosRevista = {[
  'quais sementes você planta?',
  'veja o que está na época',
  'como combinar as plantas?'

  ]}
  conteudos = {[
    'A semente amassada contém um suco a partir do qual a planta crescerá quando encontrar as condições desejadas. Também contém um suprimento de reserva que servirão para o primeiro estágio de desenvolvimento da planta, depois da formação completa dos órgãos responsáveis pela alimentação.',
    'A abordagem considera que há influências lunares e astrológicas sobre o solo e no desenvolvimento da planta, por exemplo, optando por plantar, cultivar ou colher várias culturas baseado nas fases da lua e da constelação zodiacal em que a lua está passando, e também dependendo se a cultura é a raiz, folha, flor ou fruto da planta.[43][44] Este aspecto da biodinâmica foi denominado "astrologia" na natureza.',
    ' O cultivo de plantas em consórcios é praticado há séculos, sobretudo por pequenos produtores das regiões tropicais, na tentativa de obter o máximo de benefícios dos recursos disponíveis.  O consórcio de culturas (Fig. 1) é caracterizado pela maximização de espaço mediante o cultivo simultâneo, num mesmo local, de duas ou mais espécies com diferentes características quanto à sua arquitetura vegetal, hábitos de crescimento e fisiologia. As plantas podem ser semeadas ou plantadas ao mesmo tempo ou terem época de implantação levemente defasada, mas compartilham dos mesmos recursos ambientais durante grande parte de seus ciclos de vida, fato que leva a forte interatividade entre as espécies consorciadas e entre elas e o ambiente. Essa técnica é extremamente interessante especialmente quando se quer maximizar o aproveitamento da água disponível no solo ou do período chuvoso, tornando-se fundamental em regiões do Brasil onde, ao longo do ano, ocorrem duas épocas bem distintas, uma chuvosa e outra seca (que pode durar até 6 meses). Compondo o Sistema Plantio Direto (SPD), a consorciação de culturas, além de proporcionar uma série de outros benefícios, como o auxilio no controle de plantas daninhas, promove excelente cobertura viva e morta do solo, durante o maior período de tempo possível.    http://www.agencia.cnptia.embrapa.br/gestor/sistema_plantio_direto/arvore/CONT000fx4zsnby02wyiv80u5vcsvyqcqraq.html'

  ]}
  navigation={navigation}
  />
    </View>

  );
};







// ------------------ Estilos

const estilos = StyleSheet.create({

  cabeca:{
    fontFamily:'Serif',
    width:400,
  },
ListaItens:{
  position:'relative',
  left:40,
},
  container:{flex:1,
    // justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#d9fac8',
    backgroundColor: '#e0fad2',
    backgroundColor: '#fff5bd',

    // backgroundColor: '#fbffb3',
  },

  texto: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  plantio: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    left: 95,
    top:-285,

    // backgroundColor: '#c2bad8',
    // padding: 9,
    // margin: 5,
    
    // shadowOffset:{  width: 10,  height: 10,  },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
    // elevation: 5,  
  },
  beneficiamento: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    left: 220,
    top:-240
    

  },

  comercializacao: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    left: 40,
    top:-170

  },

  politica: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    left: 185,
    top:-115,
    // borderColor:'#fff',

  
  },

  imagem: {
    width:360,
    height:360,
    borderRadius:200,
    // borderColor:'#fcd260',
    // borderWidth:6,
    // borderStyle:'solid',
   
    alignItems: 'center',
    marginTop:100,
    marginLeft:7,
  
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,

  },
  
  cabeca:{
    fontFamily:'Serif',
    width:400,
  },
});


export default Plantio;

