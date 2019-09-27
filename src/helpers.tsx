/// <reference path="index.d.ts" />

const getRgbaChannels = (color: string): number[] => {
  const channels = color
    .replace(/[^\d,\.]+/g, "")
    .split(",")
    .map(Number);

  if (channels.length < 4) channels.push(1);
  return channels;
};

const getHexChannels = (hex: string): number[] => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b, 1];
};

export const getColorChannels = (color: string): number[] => {
  if (color.match(/#/)) return getHexChannels(color);
  return getRgbaChannels(color);
};
