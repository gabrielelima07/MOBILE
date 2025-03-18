import { View, Text, StyleSheet} from 'react-native';
import { Image } from "module";
export default function Index() {
  return (
    <View style={styles.viewPrincipal}>
     <View style={styles.card}>
      <Image style={styles.imagem}>
     </View>
   </View>

);
 }
 //Criar os estilos separadamente
const styles= StyleSheet.create({
viewPrincipal: {
   
    }
}
})