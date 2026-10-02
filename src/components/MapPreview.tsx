import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { travelService } from '../services/travelSdkAdapter';

/** 第三方 SDK 示例：react-native-maps 负责把原生地图能力封装成 RN 组件。 */
export function MapPreview() {
  return <View style={styles.wrapper}>
    <Text style={styles.title}>探索地图</Text>
    <MapView style={styles.map} initialRegion={travelService.getMapRegion()}>
      <Marker coordinate={{ latitude: 35.0116, longitude: 135.7681 }} title="京都" description="古寺、街巷与四季风物" />
    </MapView>
  </View>;
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 28 },
  title: { color: colors.text, fontSize: 20, fontWeight: '700', marginBottom: 14 },
  map: { borderRadius: 20, height: 190, overflow: 'hidden', width: '100%' },
});
