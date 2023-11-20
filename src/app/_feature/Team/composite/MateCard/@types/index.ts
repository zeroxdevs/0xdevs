import { DivProps } from '@src/components/Div/@types';
import { MateItems } from '../../../@types';

export interface MateCardProps extends MateItems, Omit<DivProps, 'children'> {}
