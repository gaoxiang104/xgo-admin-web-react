import './assets/styles/App.scss';
import { useRoutes } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen';
import LayoutScreen from './screens/layout/LayoutScreen';


function App() {
  let element = useRoutes([
    {
      path: "/", element: <LayoutScreen />,
      // children: [
      //   { index: true, element: <Home /> },
      //   { path: 'state/clock', element: <Clock /> },
      //   { path: 'handling-event/toggle', element: <Toggle /> },
      //   { path: 'name-form-fun/NameFormFun', element: <NameFormFun /> },
      // ]
    },
    {
      path: "/login", element: <LoginScreen />,
    },
  ]);
  return element;
}

export default App;
