import style from './Statistics.module.scss';
import { StatisticItem } from 'components/StatisticItem';

export const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);
