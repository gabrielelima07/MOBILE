import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function Index() {
  return (
    <ScrollView>
      <View style={styles.text}>
        <Text style={styles.text}>Novas Ofertas Para Você!
        </Text>
      </View>
      <View style={styles.viewPrincipal}>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://m.media-amazon.com/images/I/51uReCdcgTL._AC_SX425_.jpg' }} />
          <Text style={styles.text}>Celular Samsung 2021 Semi Novo</Text>
          <Text style={styles.text}>Jandira-SP 13/02/25</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://m.media-amazon.com/images/I/712jWs461ZL._AC_SX450_.jpg' }} />
          <Text style={styles.text}>Notebook Intel core I5</Text>
          <Text style={styles.text}>Carapicuiba-SP 12/10/24</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_779146-MLA53778959612_022023-O.webp' }} />
          <Text style={styles.text}>AirPods Lançamento</Text>
          <Text style={styles.text}>Jundiai-SP 20/03/25</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://balishoes.vtexassets.com/arquivos/ids/205220/1.jpg?v=638182999025530000' }} />
          <Text style={styles.text}>Tênis Airmax</Text>
          <Text style={styles.text}>Ilhabela-SP 02/01/25</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_754860-MLB82666393422_032025-O-kit-wepink-especial-skincare-7-itens-brinde.webp' }} />
          <Text style={styles.text}>Kit SkinCare WePink</Text>
          <Text style={styles.text}>Mogi das Cruzes-SP 20/03/24</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.imagem} source={{ uri: 'https://jardimdossonhos.com.br/wp-content/uploads/2023/06/39583957_presentation_normal_none.webp' }} />
          <Text style={styles.text}>Árvore Antiga 00/00/00 </Text>
        </View> 
        </View>

    </ScrollView>
  );
}
//Criar os estilos separadamente
const styles = StyleSheet.create({
  viewPrincipal: {
    margin: 15,
    justifyContent: 'space-between',
    borderRadius: 20,
    flexWrap: 'wrap',
    paddingBottom: 30,
    flexDirection: 'row',

  },
  card: {
    backgroundColor: '',
    borderRadius: 20,
    marginBottom: 35,
    shadowColor: 'black',
    shadowRadius: 8,
    width: 185,
    padding:10,
    alignItems: 'center'



  },
  imagem: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    objectFit: 'cover'
  },
  text: {
    padding: 10,
    alignItems: 'center'
  }
})