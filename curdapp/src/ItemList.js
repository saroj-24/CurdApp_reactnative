// src/ItemList.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getItems, deleteItem } from './api';
import { useNavigation } from '@react-navigation/native';

const ItemList = () => {
    const navigation = useNavigation();
    const queryClient = useQueryClient();

    // Fetching items using react-query
    const { data: items, isLoading, error } = useQuery('items', getItems);

    // Deleting an item using react-query mutation
    const deleteMutation = useMutation(deleteItem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items');
        },
    });
 // Handle deleting an item
    const handleDelete = (itemId) => {
        deleteMutation.mutate(itemId);
    };
// Handle editing an item
    const handleEdit = (item) => {
        navigation.navigate('EditItem', { item });
    };

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
 // Show error state
    if (error) {
        return <Text>Error loading items</Text>;
    }
  // Render the list of items
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Edit" onPress={() => handleEdit(item)} />
                        <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
    },
    title: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default ItemList;
