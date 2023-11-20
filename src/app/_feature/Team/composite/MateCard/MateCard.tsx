import Div from '@src/components/Div';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.css';
import Typography from '@src/components/Typography';
import { MateCardProps } from './@types';

function MateCard(props: MateCardProps) {
  const { name, expertise, imgSrc, className, ...rest } = props;
  return (
    <Div className={classNames(styles['mate-card'], className)} {...rest}>
      <Div className={classNames(styles['mate-image-container'])}>
        <Image
          className={classNames(styles['mate-image'])}
          src={`/assets/img/${imgSrc}`}
          width={170}
          height={170}
          alt={`mate ${name}`}
        />
      </Div>
      <Div className="pt-[20px]">
        <Div className="w-[200px] h-[2px] bg-accent"></Div>
      </Div>
      <Div className="text-center">
        <Div className="pt-[15px]">
          <Typography variant="Text">{name}</Typography>
        </Div>
        <Div className="pt-[15px]">
          <Typography variant="Text">{expertise}</Typography>
        </Div>
      </Div>
    </Div>
  );
}

export default MateCard;
