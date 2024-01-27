import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("");

  const pressHandler = (value, index) => {
    if (index === 0 || index === 1 || index === 2) {
      if (!firstValue) {
        setFirstValue(Number(value));
      } else {
        setSecondValue(Number(value));
      }
    } else if (index === 3) {
      setOperator(value);
    } else if (index === 4) {
      //c operator
      setResult(0);
      setFirstValue(0);
      setSecondValue(0);
      setOperator("");
    } else {
      // == operator
      switch (operator) {
        case "+":
          setResult(firstValue + secondValue);
          break;
        case "-":
          setResult(firstValue - secondValue);
          break;
        case "/":
          setResult(firstValue / secondValue);
          break;
        default:
          setResult(firstValue * secondValue);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={"green"} />
      <View style={styles.app}>
        <View style={styles.result}>
          <Text style={styles.textresult}>{result}</Text>
          <Text style={styles.textresultOperations}>{firstValue}</Text>
          <Text style={styles.textresultOperations}>{operator}</Text>
          <Text style={styles.textresultOperations}>{secondValue}</Text>
        </View>
        <View style={styles.calculator}>
          <View style={styles.row}>
            {["1", "2", "3", "+"].map((value, index) => (
              <Pressable style={styles.buttonCss} key={index} android_ripple={{ color: "white" }} onPress={() => pressHandler(value, index)}>
                <Text style={styles.textCss}>{value}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.row}>
            {["4", "5", "6", "-"].map((value, index) => (
              <Pressable style={styles.buttonCss}  key={index} android_ripple={{ color: "white" }} onPress={() => pressHandler(value, index)}>
                <Text style={styles.textCss}>{value}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.row}>
            {["7", "8", "9", "*"].map((value, index) => (
              <Pressable style={styles.buttonCss}  key={index} android_ripple={{ color: "white" }} onPress={() => pressHandler(value, index)}>
                <Text style={styles.textCss}>{value}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.row}>
            {["0", "C", "=", "/"].map((value, index) => (
              <Pressable style={styles.buttonCss} key={index} android_ripple={{ color: "white" }} onPress={() => pressHandler(value, index === 1 ? 4 : index === 2 ? 5 : index)}>
                <Text style={styles.textCss}>{value}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  app: {
    flex: 1
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textresult: {
    fontSize: 35,
    fontWeight: "bold"
  },
  textresultOperations: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-end",
    paddingRight: 15
  },
  calculator: {
    paddingBottom: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  buttonCss: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 70,
    backgroundColor: "orange"
  },
  textCss: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  }
});
