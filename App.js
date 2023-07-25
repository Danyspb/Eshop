
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigators/Main';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/Store';



export default function App() {
  return (
    <NavigationContainer>
        <Header /> 
        <Main /> 
    </NavigationContainer>
    
  );
}

