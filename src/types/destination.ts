export const destinationCategories = ['全部', '自然', '文化', '城市'] as const;

export type DestinationCategory = (typeof destinationCategories)[number];

export type Destination = {
  id: string;
  city: string;
  country: string;
  emoji: string;
  tag: Exclude<DestinationCategory, '全部'>;
  description: string;
};
