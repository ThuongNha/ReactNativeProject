import { createDrawerNavigator } from '@react-navigation/drawer';
import LandMarkScreen from '../screens/LandMarkScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Landmark" component={LandMarkScreen} />
          <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
      </Drawer.Navigator>
      );
}

export default DrawerNavigator