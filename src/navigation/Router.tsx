import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouterStackParamList} from '../interface/navigation.interface';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Matrics} from '../constants';
import {StyleSheet} from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import CategoryScreen from '../screens/CategoryScreen';

const RouterStack = createBottomTabNavigator<RouterStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <RouterStack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.blue,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: () => null,
        }}>
        <RouterStack.Screen name="Welcome" component={WelcomeScreen} />
        <RouterStack.Screen name="Category" component={CategoryScreen} />
      </RouterStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: Matrics.mvs(16),
    paddingBottom: Matrics.mvs(12),
  },
});

export default memo(Router);
