import type { Region } from 'react-native-maps';
import { destinations } from '../data/destinations';
import type { Destination } from '../types/destination';

/** 项目自研 SDK：对外暴露稳定接口，内部数据来源以后可以替换成接口或原生模块。 */
class TravelSdk {
  getFeaturedDestinations(): Destination[] {
    return destinations;
  }

  getDefaultMapRegion(): Region {
    return { latitude: 35.0116, longitude: 135.7681, latitudeDelta: 0.08, longitudeDelta: 0.08 };
  }
}

export const travelSdk = new TravelSdk();
