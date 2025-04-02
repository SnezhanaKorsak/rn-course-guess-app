import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';

import { Colors } from './theme/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let pageComponent = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    pageComponent = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  return (
    <LinearGradient style={styles.container} colors={[Colors.primary600, Colors.accent]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBg}
      >
        <SafeAreaView>
          {pageComponent}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    opacity: 0.15
  }
});