import Icon from '@react-native-vector-icons/ionicons';

interface Props {
    name: string;
    size?: number;
    color?: string;
}

export const IonIcon = (Props: any) => {
  return (
    <Icon 
    {...Props} 
    />
  )
}

