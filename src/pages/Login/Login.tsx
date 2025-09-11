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
import { useCallback } from 'react';
import { CurrentUser } from './CurrentUser';
import { signIn } from '../../redux/reducers/auth/actionCreators/signIn';
import { useAppDispatch } from '../../redux/store/store';
import { authedUserSelector } from '../../redux/selectors/authSelectors';
import { useSelector } from 'react-redux';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSignin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const email = (e.currentTarget as HTMLFormElement).email?.value;
      const password = (e.currentTarget as HTMLFormElement).password?.value;
      dispatch(signIn({ email, password }));
    },
    [dispatch],
  );

  const authedUser = useSelector(authedUserSelector);

  return (
    <div>
      <IonGrid className="login-container">
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
            {authedUser ? (
              <CurrentUser authedUser={authedUser} />
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
    </div>
  );
};

export default Login;
