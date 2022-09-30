import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Ezequiel';
    let img = 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/116759524_1823392857799342_8098174536986732292_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGg1VHh28OTkmG0cRh9_ogtG0VJv2HPm8QbRUm_Yc-bxLGYez9vFDGBErMppjZgqSm5TrEkR_4Ox-BGmEoLob7j&_nc_ohc=UsAD3Xps8BAAX-7wDWG&_nc_ht=scontent-gru1-1.xx&oh=00_AT8FI6Xi_jaUgCRaakUzEYtnbFdKhINSpml45gp56BbzLQ&oe=63365BCA';
 
    return(
      <View>
        <Text style={{color: '#0000FF', fontSize: 25, margin: 15}}>
          Meu Perfil 

          </Text>
        <Text>
          Bem Vindo
        </Text>
        <Text style={{color: '#00BFFF', fontSize: 15, margin: 5}}>
        Numero de Contato
        </Text>
        <Text>
        13996236645
        </Text>
        <Text style={{color: '#00BFFF', fontSize: 15, margin: 5}}>
          Experiencia
        </Text>
        <Text>
          PHP, JAVA SCRIPT, JAVA, BANCO DE DADOS, 
        </Text>

 
 <Image
   source={{ uri: img }}
   style={{ width: 300, height: 300}}
 />

 <Text style={{ fontSize: 30 }}>{nome}</Text>
 

</View>
)
}
}

export default App;
