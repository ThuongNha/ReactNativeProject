import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LandMarkScreen from '../screens/LandMarkScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Landmark" component={LandMarkScreen} />
          <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        </Tab.Navigator>
      );
}

export default TopTabNavigator