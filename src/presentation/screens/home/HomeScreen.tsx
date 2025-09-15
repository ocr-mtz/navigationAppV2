import { useEffect } from 'react';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => 
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
    })
  }, []);

  return (
    <View style = { globalStyles.container }>
      {/*<Pressable 
        onPress = {() => navigation.navigate('Products' as never)}
        style = { globalStyles.primarybutton }>
        <Text style = { globalStyles.buttonText }>Productos</Text>
      </Pressable>*/}

      <PrimaryButton 
        onPress = { () => navigation.navigate('Products') }
        label = 'Productos'
      />

      <PrimaryButton 
        onPress = { () => navigation.navigate('Settings') }
        label = 'Settings'
      />


    </View>
  )
}
