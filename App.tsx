import { StatusBar } from 'react-native';

//Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import WrapperContainer from './src/components/layouts/WrapperContainer';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import TopTabNavigator from './src/navigations/TopTabNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';

StatusBar.setBackgroundColor('black');
StatusBar.setBarStyle('light-content');

//Transparent background to the navigation container for the ImageBackground
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
}

const App: React.FC = () => {

  return (
      <NavigationContainer theme={MyTheme} >
        <WrapperContainer>
          {/* <BottomTabNavigator /> */}
          <TopTabNavigator />
          {/* <DrawerNavigator/> */}
        </WrapperContainer>
      </NavigationContainer>
  );
}

export default App