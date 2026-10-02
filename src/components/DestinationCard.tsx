import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import type { Destination } from '../types/destination';

type Props = { destination: Destination; isFavorite: boolean; onToggleFavorite: (id: string) => void; onPress: (destination: Destination) => void };

export function DestinationCard({ destination, isFavorite, onToggleFavorite, onPress }: Props) {
  return <View style={styles.card}><View style={styles.image}><Text style={styles.emoji}>{destination.emoji}</Text></View><View style={styles.body}><View style={styles.titleRow}><View><Text style={styles.city}>{destination.city}</Text><Text style={styles.country}>{destination.country} · {destination.tag}</Text></View><Pressable onPress={() => onToggleFavorite(destination.id)} hitSlop={10}><Text style={styles.favorite}>{isFavorite ? '♥' : '♡'}</Text></Pressable></View><Text style={styles.description}>{destination.description}</Text><Pressable onPress={() => onPress(destination)}><Text style={styles.detail}>查看详情 →</Text></Pressable></View></View>;
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 20, flexDirection: 'row', marginBottom: 14, padding: 14 },
  image: { alignItems: 'center', backgroundColor: colors.imageBackground, borderRadius: 16, height: 92, justifyContent: 'center', width: 92 },
  emoji: { fontSize: 42 }, body: { flex: 1, marginLeft: 14 }, titleRow: { flexDirection: 'row', justifyContent: 'space-between' },
  city: { color: colors.text, fontSize: 19, fontWeight: '700' }, country: { color: colors.textSubtle, fontSize: 12, marginTop: 4 },
  favorite: { color: colors.favorite, fontSize: 27 }, description: { color: colors.textMuted, fontSize: 13, marginTop: 12 },
  detail: { color: colors.primary, fontSize: 13, fontWeight: '700', marginTop: 12 },
});
