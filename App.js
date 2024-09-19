import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <TextInput placeholder="Full Name" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TextInput placeholder="Username" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TextInput placeholder="Email" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        display: "flex",
        flex: 1,
        backgroundColor: "#137e9e",
    },
    container: {
        display: "flex",
        flex: 1,
        marginVertical: 50,
        marginHorizontal: 30,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 900,
    },
    title: {
        fontSize: 30,
        color: "black",
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        textAlign: "left",
        backgroundColor: "#2fbce7",
        color: "#fff",
        height: 50,
        width: 300,
        padding: 10,
        margin: 20,
    },
    button: {
        marginTop: 20,
        height: 50,
        width: 300,
        backgroundColor: "#000",
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#fff",
        fontSize: 25,
    },
});
