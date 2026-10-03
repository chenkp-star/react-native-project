import { travelSdk } from '../sdk/travelSdk';

/** 适配层：页面依赖这里，而不是直接依赖 SDK，未来替换 SDK 时页面无需修改。 */
export const travelService = {
  listFeaturedDestinations: () => travelSdk.getFeaturedDestinations(),
};
