import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LandmarkScreen from '../screens/LandMarkScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {...styles.tabBar, height: 40},
        tabBarLabelStyle: styles.tabBarLabel, 
        headerTitleAlign: "center",
        headerTintColor: "black",
        tabBarShowLabel: false,
        // headerTitle: null, 
        headerStyle: {
          backgroundColor: '#FFAA33',
          },
      }}>
      <Tab.Screen
        name="LandMark"
        component={LandmarkScreen}
        options={{
          headerShown: false,
          tabBarIcon:({ focused, size }) => (
            <MaterialCommunityIcons 
            name="map-marker" 
            color={focused ? '#ADD8E6' : 'grey'} 
            size={size} />
          ),
        }}
      />
         <Tab.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerShown: false,
          tabBarIcon:({ focused, size }) => (
            <MaterialCommunityIcons 
            name="food" 
            color={focused ? '#ADD8E6' : 'grey'} 
            size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: '#000000', 
      height: 60, 
    },
    tabBarLabel: {
      color: 'white', 
      fontSize: 16, 
    },
    tabStyles: {
      color: 'red'
    }
  });

export default BottomTabNavigator