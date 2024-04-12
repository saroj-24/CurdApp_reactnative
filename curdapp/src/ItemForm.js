import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required'),
});



// Form component for creating or editing an item
const ItemForm = ({ onSubmit, initialValues }) => {
       // Use Formik for form management
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                    />
                    {touched.title && errors.title && (
                        <Text style={styles.errorText}>{errors.title}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        placeholder="Body"
                        onChangeText={handleChange('body')}
                        onBlur={handleBlur('body')}
                        value={values.body}
                    />
                    {touched.body && errors.body && (
                        <Text style={styles.errorText}>{errors.body}</Text>
                    )}
                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingLeft: 10,
    },
    errorText: {
        color: 'red',
    },
});

export default ItemForm;
