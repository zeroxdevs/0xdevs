import { DivProps } from '@src/components/Div/@types';

export type DividerVariant = 'primary' | 'secondary';

export interface DividerProps extends DivProps {
  variant: DividerVariant;
}
