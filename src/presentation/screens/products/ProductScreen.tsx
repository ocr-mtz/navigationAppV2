import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {
  // Se puede destructurar los parametros para que nosotros podamos personalizarlos, usando un RouteProp para indicar que los obtendremos de un prop, indicamos el tipo de tipado, y podemos indicar que pantalla es.
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation()

  // Cambiar el label del titulo que se muestra en el header
  useEffect(() => {
    navigation.setOptions({
      title: params.name
    });
  }, []);

  return (
    <View style = { globalStyles.container }>
      <Text>Product Screen</Text>
      <Text style = {{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}
