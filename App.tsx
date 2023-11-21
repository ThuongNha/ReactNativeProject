import { StatusBar } from 'react-native';

//Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import WrapperContainer from './src/components/layouts/WrapperContainer';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';

StatusBar.setBackgroundColor('black');
StatusBar.setBarStyle('light-content');

//Creating a transparent background to the navigation container for the ImageBackground
const MyTheme =  {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
}

const App: React.FC = ()  => { 

  return (
    <NavigationContainer theme={MyTheme} >
      <WrapperContainer>
          <BottomTabNavigator />
      </WrapperContainer>
    </NavigationContainer>
  );
}

export default App