import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { destinationCategories, type DestinationCategory } from '../types/destination';

type Props = { selected: DestinationCategory; onSelect: (category: DestinationCategory) => void };

export function CategoryFilter({ selected, onSelect }: Props) {
  return <View style={styles.row}>{destinationCategories.map((category) => <Pressable key={category} onPress={() => onSelect(category)} style={[styles.button, selected === category && styles.activeButton]}><Text style={[styles.label, selected === category && styles.activeLabel]}>{category}</Text></Pressable>)}</View>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10, marginTop: 24 },
  button: { backgroundColor: colors.surface, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 9 },
  activeButton: { backgroundColor: colors.text },
  label: { color: colors.textMuted, fontSize: 14 },
  activeLabel: { color: colors.surface },
});
