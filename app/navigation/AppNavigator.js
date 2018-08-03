import React from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { createSwitchNavigator } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});