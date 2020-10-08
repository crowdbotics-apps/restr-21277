import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0133479Navigator from '../features/BlankScreen0133479/navigator';
import Maps133461Navigator from '../features/Maps133461/navigator';
import Add-Item133460Navigator from '../features/Add-Item133460/navigator';
import Maps133456Navigator from '../features/Maps133456/navigator';
import UserProfile133452Navigator from '../features/UserProfile133452/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0133479: { screen: BlankScreen0133479Navigator },
Maps133461: { screen: Maps133461Navigator },
Add-Item133460: { screen: Add-Item133460Navigator },
Maps133456: { screen: Maps133456Navigator },
UserProfile133452: { screen: UserProfile133452Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
