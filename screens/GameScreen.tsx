import { useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getRandomNumberBetween } from '../utils';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { InstructionText } from '../components/ui/InstructionText';
import { Colors } from '../theme/colors';
import { GuessLogItem } from '../components/game/GuessLogItem';

type Props = {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }: Props) => {
  const initialGuess = getRandomNumberBetween(minBoundary, maxBoundary, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: 'lower' | 'greater') => () => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newNumber = getRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newNumber);
    setGuessRounds((prevGuessRounds) => [newNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.inputContainer}>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler('greater')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
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
  listContainer: {
    padding: 16
  }
});