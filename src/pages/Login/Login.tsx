import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonCol,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import './Login.css';
import { AuthService } from 'src/api/services/auth-service';
import { useCallback, useState } from 'react';
import { CurrentUser } from './CurrentUser';
import { useLocalstorage } from '../../hooks/use-local-storage';
import { ResponseTokenDto } from '../../api/dto/auth/response-token.dto';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const [{ accessToken }, setTokens] = useLocalstorage<ResponseTokenDto>('auth', { accessToken: '', refreshToken: '' });

  const handleSignin = useCallback(() => {
    const authService = new AuthService();
    authService.login(credentials, setTokens);
  }, [credentials, setTokens]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="login-content">
        <IonGrid className="login-container">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              {accessToken?.length > 0 ? (
                <CurrentUser setTokens={setTokens} />
              ) : (
                <div className="login-form">
                  <IonList>
                    <IonItem>
                      <IonLabel position="floating">Enter your username</IonLabel>
                      <IonInput
                        placeholder="Username"
                        value={credentials.email}
                        onIonChange={(e) => setCredentials({ ...credentials, email: e.detail.value! })}
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Enter your password</IonLabel>
                      <IonInput
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onIonChange={(e) => setCredentials({ ...credentials, password: e.detail.value! })}
                      />
                    </IonItem>
                  </IonList>
                  <IonButton fill="solid" expand="block" onClick={handleSignin}>
                    Sign in
                  </IonButton>
                </div>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
