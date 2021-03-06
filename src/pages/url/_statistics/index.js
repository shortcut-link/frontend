import React from 'react';
import { useStore } from 'effector-react';

import { classNames } from 'lib/utils/class-names';

import commonStyle from '../index.module.css';
import s from './index.module.css';
import { $createdURL } from '../store';

export const StatisticsCreatedURL = () => {
  let { statistics } = useStore($createdURL);

  let rootClassName = classNames('flat', commonStyle.card);

  return (
    <section className={rootClassName}>
      <h2>Statistics</h2>

      <ul className={s.list}>
        <li>
          Number of transitions on the URL: {statistics.numberTransitions}
        </li>
      </ul>
    </section>
  );
};
