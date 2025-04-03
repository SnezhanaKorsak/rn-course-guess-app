import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from '../ui/PrimaryButton';
import { NumberContainer } from './NumberContainer';

import { Colors } from '../../theme/colors';

type Props = {
  currentGuess: number;
  nextGuessHandler: (direction: 'lower' | 'greater') => void;
}

export const GameCardLandscape = ({ currentGuess, nextGuessHandler }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
          <Ionicons name="remove" size={24} color="white" />
        </PrimaryButton>
      </View>

      <View style={styles.numberContainer}>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>


      <View style={styles.btn}>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
          <Ionicons name="add" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  btn: {
    flex: 1,
  },
  numberContainer: {
    width: '25%',
    marginHorizontal: 20,
  }
});