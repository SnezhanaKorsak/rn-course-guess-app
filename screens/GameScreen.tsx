import { useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, View, useWindowDimensions } from 'react-native';

import { getRandomNumberBetween } from '../utils';
import { Title } from '../components/ui/Title';
import { GuessLogItem } from '../components/game/GuessLogItem';
import { GameCardPortrait } from '../components/game/GameCardPortrait';
import { GameCardLandscape } from '../components/game/GameCardLandscape';

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

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
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

  const contentComponent = width > 500 ?
    <GameCardLandscape currentGuess={currentGuess} nextGuessHandler={nextGuessHandler} /> :
    <GameCardPortrait currentGuess={currentGuess} nextGuessHandler={nextGuessHandler} />;

  const paddingListContainer = width > 500 ?  0 : 16;

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />

      {contentComponent}

      <View style={[styles.listContainer, {padding: paddingListContainer}]}>
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
    height: '100%',
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
  listContainer: {
    flex: 1,
    paddingBottom: 0,
  }
});