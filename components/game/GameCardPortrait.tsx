import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { InstructionText } from '../ui/InstructionText';
import { PrimaryButton } from '../ui/PrimaryButton';
import { NumberContainer } from './NumberContainer';

import { Colors } from '../../theme/colors';

type Props = {
  currentGuess: number;
  nextGuessHandler: (direction: 'lower' | 'greater') => void;
}

export const GameCardPortrait = ({ currentGuess, nextGuessHandler }: Props) => {
  return (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.inputContainer}>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    padding: 20,
    backgroundColor: Colors.primaryBcg,
    borderRadius: 8,
    elevation: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  instructionText: {
    marginBottom: 12,
  },
  btn: {
    flex: 1,
  },
});