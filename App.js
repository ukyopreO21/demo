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
                <Text style={styles.title}>Member Login</Text>
                <TextInput placeholder="Email" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="#fff" style={styles.input}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.extendedFeature}>
                    <View style={styles.remember}>
                        <TouchableOpacity style={styles.checkBox} onPress={toggleCheckBox}>
                            {isChecked && <Text style={styles.checkMark}>✓</Text>}
                        </TouchableOpacity>
                        <Text style={styles.rememberText}>Remember me</Text>
                    </View>
                    <View style={styles.forgot}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </View>
                </View>
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
    extendedFeature: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
        marginTop: 60,
    },
    remember: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    checkBox: {
        width: 35,
        height: 35,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    checkMark: {
        color: "#2fbce7",
        fontSize: 30,
        fontWeight: "bold",
    },
    rememberText: {
        fontSize: 15,
        marginLeft: 5,
        textAlign: "left",
    },
    forgot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    forgotText: {
        fontSize: 15,
        textAlign: "right",
    },
});
