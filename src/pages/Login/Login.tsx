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
import { useCallback } from 'react';
import { CurrentUser } from './CurrentUser';
import { useLocalstorage } from '../../hooks/use-local-storage';
import { ResponseTokenDto } from '../../api/dto/auth/response-token.dto';

const Login: React.FC = () => {
  // const [credentials, setCredentials] = useState({ email: '', password: '' });

  const [{ accessToken }, setTokens] = useLocalstorage<ResponseTokenDto>('auth', { accessToken: '', refreshToken: '' });

  const handleSignin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const email = (e.currentTarget as HTMLFormElement).email?.value;
      const password = (e.currentTarget as HTMLFormElement).password?.value;
      const authService = new AuthService();
      authService.login({ email, password }, setTokens);
    },
    [setTokens],
  );

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
                  <form onSubmit={handleSignin}>
                    <IonList>
                      <IonItem>
                        <IonLabel position="floating">Enter your email</IonLabel>
                        <IonInput type="email" placeholder="Email" autocomplete="username" name="email" />
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Enter your password</IonLabel>
                        <IonInput
                          type="password"
                          autocomplete="current-password"
                          placeholder="Password"
                          name="password"
                        />
                      </IonItem>
                    </IonList>
                    <IonButton fill="solid" expand="block" type="submit">
                      Sign in
                    </IonButton>
                  </form>
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
