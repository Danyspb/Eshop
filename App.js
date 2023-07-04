
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigators/Main';

export default function App() {
  return (
    <NavigationContainer>
        <Header /> 
        <Main /> 
    </NavigationContainer>
    
  );
}

