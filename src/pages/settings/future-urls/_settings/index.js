import React from 'react';
import { useStore } from 'effector-react';

import { Checkbox } from 'components/form';

import s from './index.module.css';
import { $settingsFutureURLs, changeParameterFutureURLs } from '../store';

export const SettingsFutureURLs = () => {
  let settingsFutureURLs = useStore($settingsFutureURLs);

  return (
    <ul className={s.root}>
      <li>
        <Checkbox
          checked={settingsFutureURLs.trackingNumberTransitions}
          onChange={(event) =>
            changeParameterFutureURLs({
              name: 'trackingNumberTransitions',
              value: event.target.checked
            })
          }
        >
          Tracking the number of transitions on URLs
        </Checkbox>
      </li>
    </ul>
  );
};
