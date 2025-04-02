import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

import { PrimaryButton } from '../components/ui/PrimaryButton';

import { Colors } from '../theme/colors';
import { Title } from '../components/ui/Title';
import { InstructionText } from '../components/ui/InstructionText';

type Props = {
  onPickNumber: (pickedNumber: number) => void;
}

export const StartGameScreen = ({ onPickNumber }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const inputNumberHandler = (value: string) => {
    setEnteredNumber(value);
  };

  const resetNumberHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    const isValidateError = isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99;

    if (isValidateError) {
      Alert.alert(
        'Invalid number!',
        'Number should be between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetNumberHandler }],
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title title="Guess my Number" />

      <View style={styles.inputContainer}>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredNumber}
          onChangeText={inputNumberHandler}
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 20,
    backgroundColor: Colors.primaryBcg,
    borderRadius: 8,
    elevation: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    width: 80,
    height: 50,
    fontSize: 26,
    paddingVertical: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  }
});
