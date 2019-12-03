import TelaInicial from './src/screens/TelaInicial';
import Dashboard from  './src/screens/Dashboard';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const RootStack = createStackNavigator({ 
    Home: TelaInicial,
    Dash: Dashboard,
})

const AppContainer = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => AppContainer);


export default AppContainer;

