import style from './StatisticItem.module.scss';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../helpers/randomColor';

console.log(getRandomHexColor());
// style = {{background-color:`${getRandomHexColor()};`}}

export const StatisticItem = ({ id, label, percentage }) => (
  <li
    style={{ backgroundColor: getRandomHexColor() }}
    className={style.item}
    key={id}
  >
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
