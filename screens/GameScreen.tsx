import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { getRandomNumberBetween } from '../utils';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';

type Props = {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }: Props) => {
  const initialGuess = getRandomNumberBetween(minBoundary, maxBoundary, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
      console.log(maxBoundary);
    } else {
      minBoundary = currentGuess + 1;
    }

    const newNumber = getRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newNumber);
  };

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler('lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler('greater')}>+</PrimaryButton>
        </View>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
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
});