import { IonApp, IonPage, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { routes } from './routes/routes';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <Provider store={store}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={true}
                  render={(props) => (
                    <IonPage>
                      {route.guard ? (
                        <route.guard options={route.guardOptions || {}}>
                          <route.component {...props} />
                        </route.guard>
                      ) : (
                        <route.component {...props} />
                      )}
                    </IonPage>
                  )}
                />
              ))}
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </Provider>
    </IonApp>
  );
};

export default App;
