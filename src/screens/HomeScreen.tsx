import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { CategoryFilter } from '../components/CategoryFilter';
import { DestinationCard } from '../components/DestinationCard';
import { MapPreview } from '../components/MapPreview';
import { travelService } from '../services/travelSdkAdapter';
import { colors } from '../theme/colors';
import type { Destination, DestinationCategory } from '../types/destination';

export function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('全部');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const allDestinations = travelService.listFeaturedDestinations();
  const visibleDestinations = useMemo(() => selectedCategory === '全部' ? allDestinations : allDestinations.filter((item) => item.tag === selectedCategory), [selectedCategory, allDestinations]);
  const toggleFavorite = (id: string) => setFavoriteIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const openDetails = (destination: Destination) => Alert.alert(destination.city, destination.description);

  return <SafeAreaView style={styles.safeArea}><StatusBar style="dark" /><FlatList data={visibleDestinations} keyExtractor={(item) => item.id} contentContainerStyle={styles.content} ListHeaderComponent={<><Text style={styles.eyebrow}>WANDER · 旅行发现</Text><Text style={styles.title}>下一站，去哪里？</Text><Text style={styles.subtitle}>发现适合你的目的地，收藏旅途中的灵感。</Text><MapPreview /><CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} /><Text style={styles.sectionTitle}>热门目的地</Text></>} renderItem={({ item }) => <DestinationCard destination={item} isFavorite={favoriteIds.includes(item.id)} onToggleFavorite={toggleFavorite} onPress={openDetails} />} ListEmptyComponent={<Text style={styles.empty}>暂时没有匹配的目的地。</Text>} /></SafeAreaView>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background }, content: { padding: 24, paddingBottom: 40 },
  eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 1.5, marginTop: 12 },
  title: { color: colors.text, fontSize: 32, fontWeight: '800', marginTop: 10 }, subtitle: { color: colors.textMuted, fontSize: 15, marginTop: 10 },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '700', marginTop: 30, marginBottom: 14 },
  empty: { color: colors.textSubtle, paddingVertical: 30, textAlign: 'center' },
});
