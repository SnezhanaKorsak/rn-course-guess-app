import { StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 12,
  }
});