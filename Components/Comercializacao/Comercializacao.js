import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,TouchableHighlight,Button} from 'react-native';



import Cabeca from '../Comuns/Cabeca'
import ListaItens from '../Comuns/ListaItens'







const Comercializacao = ({navigation}) =>{

  return (
    <View style={estilos.container}>
<Cabeca titulo='Plantar' 
subtitulo='onde tudo começa' 
descricao='aqui tem informações sobre diferentes coisas que o plantio envolve:' 
style={estilos.cabeca}/>

  <ListaItens style={estilos.ListaItens} 
  ids={['p1','p2','p3','p4','p5','p6','p7','p8','p9']}
  titulos={['Sementes','Calendário de Comercializacao','Consórcios','Podas','Adubação Verde','Caldas e Pesticidas','Agrotóxicos','Organização do Trabalho','Maquinário','bla',]}
  descricoes={[
  'busque em sua região produtores confiáveis, com sementes crioulas se possível',
  'para saber as melhores épocas de plantar cada variedade alimentícia',
  'Lista de itens e Ferramenta para te auxiliar a fazer consórcios entre plantas',
  'podas podem ser para diferentes objetivos e devem ser realizadas no tempo certo',
  'ajuda suas plantas a crescerem bem nutridas, com custo reduzido',
  'formas naturais de manejo de pragas e doenças',
  'você sabe das atrocidades que agrotóxicos podem causar em seu plantio, seu solo?',
  'Grupo de Revistas sobre como você pode organizar seu trabalho de produzir',
  'para facilitar a vida do produtor, sem prejudicar o solo',
  'I itens R revista S slides F ferramenta G grupo de',

  ]}
  
  subtitulosRevista = {[
  'quais sementes você planta?',
  'qual época de cada planta?',
  'como combinar as plantas?',
  'cortando para crescer e aparecer',
  'plantando para alimentar as plantas',
  'cuidando da saúde das plantas',
  'agrotóxico envenena a vida',
  'trabalho coletivo ou individual tem que ser bem organizado',
  'vai uma mãozinha aí',
  'I itens R revista S slides F ferramenta G grupo de',


  ]}
  conteudos = {[
    'A rastreabilidade das sementes é de extrema importância do produtor, é nesse momento que se determina a qualidade do alimento, sua linhagem genética, que deve ser adequada para o clima do local de plantio, por isso melhor procurar sementes crioulas que foram selecionadas por gerações de agricultores de cada região do país.',
    'O calendário agrícola é uma fonte de informação que fornece ao produtor os meses nos quais se realizam a semeadura e a colheita de diversas culturas agrícolas ao longo do ano, de acordo com a região do país. Apesar de parte da semeadura, algumas vezes, ser plantada fora da época ideal, ou seja, fora do zoneamento agrícola, o calendário agrícola ajuda no acompanhamento da safra, uma vez que colabora para que o analista de safras tenha conhecimento do percentual de área plantada fora da época ideal, e assim, pode estar sujeito a condições climáticas desfavoráveis.',
    'O cultivo de plantas em consórcios é praticado há séculos, sobretudo por pequenos produtores das regiões tropicais, na tentativa de obter o máximo de benefícios dos recursos disponíveis.  O consórcio de culturas (Fig. 1) é caracterizado pela maximização de espaço mediante o cultivo simultâneo, num mesmo local, de duas ou mais espécies com diferentes características quanto à sua arquitetura vegetal, hábitos de crescimento e fisiologia. As plantas podem ser semeadas ou plantadas ao mesmo tempo ou terem época de implantação levemente defasada, mas compartilham dos mesmos recursos ambientais durante grande parte de seus ciclos de vida, fato que leva a forte interatividade entre as espécies consorciadas e entre elas e o ambiente. Essa técnica é extremamente interessante especialmente quando se quer maximizar o aproveitamento da água disponível no solo ou do período chuvoso, tornando-se fundamental em regiões do Brasil onde, ao longo do ano, ocorrem duas épocas bem distintas, uma chuvosa e outra seca (que pode durar até 6 meses). Compondo o Sistema Comercializacao Direto (SPD), a consorciação de culturas, além de proporcionar uma série de outros benefícios, como o auxilio no controle de plantas daninhas, promove excelente cobertura viva e morta do solo, durante o maior período de tempo possível.    http://www.agencia.cnptia.embrapa.br/gestor/sistema_plantio_direto/arvore/CONT000fx4zsnby02wyiv80u5vcsvyqcqraq.html',
    'A poda pode ser realizada para se obter diversos resultados como por exemplo, dar vitalidade a planta, aumentar a produção frutífera também produzindo melhores frutas, adequar a planta (árvore) a um tamanho adequado ideal para o manuseio ou manutenções, alterar a natureza da planta quanto a produção de galhos ou ramos, adequar a planta a um formato desejado (como o estilo vaso, por exemplo), eliminar os galhos e ramos desnecessários, inconvenientes, doentes, mortos e até adequar a planta para se obter uma média de colheitas adequadas durante o ano. ',
    'A adubação verde é a prática de cultivar plantas que, posteriormente, serão incorporadas ao solo. As espécies utilizadas normalmente possuem características que colaboram com a próxima lavoura de alguma forma,  como controle de nematoides e doenças, fornecimento de nitrogênio, etc. Desse modo, a adubação verde recupera solos degradados por cultivos intensos e manejo falho e ajuda na fertilidade do solo.',
    '',
    'A utilização de agrotóxicos polui o solo, as águas e pode causar estragos irreversíveis para o meio ambiente. Isso implica no desequilíbrio dos ecossistemas.  O uso de agrotóxicos no Brasil, mesmo com a legislação vigente, é excessivo e indiscriminado, em relação a outros países, cerca de 30% dos produtos liberados no Brasil são proibidos na União Europeia, por exemplo, o que faz com que a preferência por produtos orgânicos seja cada vez maior e torna-se um meio de cuidado com a saúde e com o meio ambiente  ',
    'Formas de Organizar seu trabalho:  Individual com empregados;   Familiar;  Cooperativa;  Associação.',
    '',
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


export default Comercializacao;

