export type ColorValue = string;

export type ColorNames = 'primary' | 'secondary' | 'accent' | 'white' | 'black';

export type ColorPaletteItem = Record<ColorNames, string>;

export type ColorPalette = () => ColorPaletteItem;
