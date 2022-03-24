import React from 'react';
import rtrRenderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {store} from '../store/index';

export default {
  ...rtrRenderer,
  create: ui => {
    return rtrRenderer.create(<Provider store={store}>{ui}</Provider>);
  },
};
