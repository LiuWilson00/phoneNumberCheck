import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [ansMsg, setAnsMsg] = useState('')
  const checkPhoneNumber = () => {
    if (phoneNumber.length <= 9) {
      setAnsMsg("電話號碼太短了啦!")
    } else if (phoneNumber.substr(0, 2) != '09') {
      setAnsMsg("手機開頭不是09?整我喔")
    } else {
      setAnsMsg("恭喜您!從你的手機號碼知道,您剛剛浪費了此生最沒有意義的1分鐘")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>手機妙算</Text>
      <View style={styles.subTitleGroup}>
        <Text style={styles.subTitle}>手機號碼與您的命運有著密不可分的關係,請輸入您的手機號碼,解析您的命運!(胡說八道請不要當真)</Text>
        <Text>{ansMsg}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>手機號碼:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="請輸入您的手機號碼"
          onChangeText={(text) => {
            setPhoneNumber(text)
          }}
          maxLength={10}
          keyboardType={'numeric'}
        ></TextInput>
      </View>
      <Button
        style={styles.btnStyle}
        title="了解您的命運"
        onPress={() => { checkPhoneNumber() }}
        color="#8ac6d1"
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beebe9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  mainText: {
    color: 'blue',
    fontSize: 50

  },
  subTitleGroup: {
    width: '80%'
  },
  titleText: {
    fontSize: 50,
    color: '#8ac6d1',
    textShadowColor: '#3b6978',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  subTitle: {
    textAlign: 'left',
    margin: 15,
    color: "#3b6978"
  },
  inputGroup: {
    width: '80%',
    alignItems: 'center',
    flexDirection: "row"
  },
  inputText: {
    backgroundColor: "#fffdf9",
    width: '80%',
    height: 50,
    fontSize: 20,
    textAlign: "center",
    borderColor: "#8ac6d1",
    borderWidth: 2,
    borderRadius: 2
  },
  inputLabel: {
    color: '#8ac6d1'
  },
  btnStyle: {
    backgroundColor: '#ffe3ed'
  }
});
