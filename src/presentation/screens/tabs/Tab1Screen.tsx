import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  
  return (
    <View style = {globalStyles.container}>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name='settings-outline' size={40} />
    </View>
  )
}
