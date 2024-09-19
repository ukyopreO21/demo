import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
    const [currentInput, setCurrentInput] = useState("");
    const [currentOperation, setCurrentOperation] = useState("");
    const [result, setResult] = useState("");

    const handlePress = (value) => {
        if (value === "AC") {
            setCurrentInput("");
            setCurrentOperation("");
            setResult("");
        } else if (value === "CE") {
            setCurrentInput(currentInput.slice(0, -1));
        } else if (value === "=") {
            try {
                setResult(eval(currentOperation.replace("x", "*") + currentInput));
            } catch {
                setResult("Error");
            }
        } else if (["+", "-", "x", "/"].includes(value)) {
            if (currentInput) {
                setCurrentOperation(currentOperation + currentInput + " " + value + " ");
                setCurrentInput("");
            }
        } else {
            setCurrentInput(currentInput + value);
        }
    };

    return (
        <View style={styles.calculator}>
            <View style={styles.screen}>
                <Text style={styles.operating}>{currentOperation}</Text>
                <Text style={styles.input}>{currentInput}</Text>
                <Text style={styles.result}>{result}</Text>
            </View>
            <View style={styles.row}>
                <Button text="AC" onPress={() => handlePress("AC")} style={[styles.functionButton, styles.column1]} />
                <Button text="CE" onPress={() => handlePress("CE")} style={[styles.functionButton, styles.column2]} />
                <Button text="%" onPress={() => handlePress("%")} style={[styles.operationButton, styles.column3]} />
                <Button text="/" onPress={() => handlePress("/")} style={[styles.operationButton, styles.column4]} />
            </View>
            <View style={styles.row}>
                <Button text="7" onPress={() => handlePress("7")} style={styles.column1} />
                <Button text="8" onPress={() => handlePress("8")} style={styles.column2} />
                <Button text="9" onPress={() => handlePress("9")} style={styles.column3} />
                <Button text="x" onPress={() => handlePress("x")} style={[styles.operationButton, styles.column4]} />
            </View>
            <View style={styles.row}>
                <Button text="4" onPress={() => handlePress("4")} style={styles.column1} />
                <Button text="5" onPress={() => handlePress("5")} style={styles.column2} />
                <Button text="6" onPress={() => handlePress("6")} style={styles.column3} />
                <Button text="-" onPress={() => handlePress("-")} style={[styles.operationButton, styles.column4]} />
            </View>
            <View style={styles.row}>
                <Button text="1" onPress={() => handlePress("1")} style={styles.column1} />
                <Button text="2" onPress={() => handlePress("2")} style={styles.column2} />
                <Button text="3" onPress={() => handlePress("3")} style={styles.column3} />
                <Button text="+" onPress={() => handlePress("+")} style={[styles.operationButton, styles.column4]} />
            </View>
            <View style={styles.row}>
                <Button text="0" onPress={() => handlePress("0")} style={styles.column1} />
                <Button text="." onPress={() => handlePress(".")} style={styles.column2} />
                <Button text="=" onPress={() => handlePress("=")} style={[styles.equalButton, styles.column3, styles.column4]} />
            </View>
        </View>
    );
}

const Button = ({ text, onPress, style }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    calculator: {
        padding: 20,
        backgroundColor: "#e6e6e6",
        flex: 1,
        justifyContent: "center",
    },
    screen: {
        height: 200,
        backgroundColor: "#ececec",
        marginBottom: 20,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    operating: {
        fontSize: 25,
        color: "#88878b",
        textAlign: "right",
        marginBottom: 5,
        height: 30,
    },
    input: {
        fontSize: 45,
        textAlign: "right",
        marginBottom: 30,
        height: 50,
    },
    result: {
        fontSize: 20,
        color: "#88878b",
        textAlign: "left",
        height: 25,
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#f9f9f9",
        padding: 20,
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    functionButton: {
        color: "#f47163",
    },
    operationButton: {
        color: "#c7a612",
    },
    equalButton: {
        backgroundColor: "#e29c00",
        color: "#ffffff",
        flex: 2.75,
    },
    column1: {
        marginLeft: 0,
        marginRight: 5,
    },
    column2: {
        marginRight: 5,
    },
    column3: {
        marginRight: 5,
    },
    column4: {
        marginRight: 0,
    },
});
