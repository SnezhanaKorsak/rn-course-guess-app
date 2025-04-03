import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';

import { Title } from '../components/ui/Title';
import { PrimaryButton } from '../components/ui/PrimaryButton';

import { Colors } from '../theme/colors';

type Props = {
  userNumber: number;
  roundsNumber: number;
  onStartNewGame: () => void;
}

export const GameOverScreen = ({ userNumber, roundsNumber, onStartNewGame }: Props) => {
  const { width } = useWindowDimensions();

  const styles = width > 500 ? stylesLandscape : stylesPortrait;

  return (
    <View style={styles.rootContainer}>
      <Title title="GAME OVER!" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
            guess the number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>

          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const stylesPortrait = StyleSheet.create({
  rootContainer: {
    height: '100%',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
  textContainer: {},
});

const stylesLandscape = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    marginRight: 30,
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});