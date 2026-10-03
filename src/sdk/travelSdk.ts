import { destinations } from '../data/destinations';
import type { Destination } from '../types/destination';

/** 项目自研 SDK：对外暴露稳定接口，内部数据来源以后可以替换成接口或原生模块。 */
class TravelSdk {
  getFeaturedDestinations(): Destination[] {
    return destinations;
  }

}

export const travelSdk = new TravelSdk();
