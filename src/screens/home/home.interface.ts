import {ViewStyle} from 'react-native/types';

export interface HomeProps {
  refreshing: boolean
  setRefreshing: React.Dispatch<React.SetStateAction<boolean>>;
  onNavigate: (name:string) => void;
}



