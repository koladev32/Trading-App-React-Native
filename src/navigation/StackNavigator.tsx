import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
          let iconName: string;
          let colorName: string;
          if (route.name === 'Home') {
            iconName = 'home';
            colorName = !focused ? '#808080' : '#138dff';
          } else if (route.name === 'Profile') {
            iconName = 'user';
            colorName = !focused ? '#808080' : '#138dff';
          } else if (route.name === 'Chart') {
            iconName = 'piechart';
            colorName = !focused ? '#808080' : '#138dff';
          } else if (route.name === 'Wallet') {
            iconName = 'wallet';
            colorName = !focused ? '#808080' : '#138dff';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={24} color={colorName} type={'antdesign'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#138dff',
        inactiveTintColor: 'gray',
        style: { borderTopColor: 'white' },
      }}
    >
      <Tab.Screen options={{ title: `` }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ title: `` }} name="Chart" component={HomeScreen} />
      <Tab.Screen options={{ title: `` }} name="Wallet" component={HomeScreen} />
      <Tab.Screen options={{ title: `` }} name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: ``,
          headerStyle: {
            height: 0,
            borderBottomWidth: 0.5,
            borderBottomColor: 'black',
            borderStyle: 'solid',
          },
        }}
        name="Tabs"
        component={MyTabs}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
