import TelaInicial from './src/screens/TelaInicial';
import Dashboard from  './src/screens/Dashboard';
import Historico from './src/screens/Historico';
import Notas from './src/screens/Notas';
import Calendario from './src/screens/Calendario';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const RootStack = createStackNavigator({ 
    Home: TelaInicial,
    Dash: Dashboard,
    Historico: Historico,
    Notas: Notas,
    Cal: Calendario,
})

const AppContainer = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => AppContainer);


export default AppContainer;

