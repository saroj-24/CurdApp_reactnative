// src/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

// Navigation stack for the application
const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ItemList">
            <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Items' }} />
            <Stack.Screen
                name="CreateItem"
                component={ItemForm}
                options={{ title: 'Create Item' }}
            />
            <Stack.Screen
                name="EditItem"
                component={ItemForm}
                options={({ route }) => ({
                    title: 'Edit Item',
                })}
                initialParams={route.params.item}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
