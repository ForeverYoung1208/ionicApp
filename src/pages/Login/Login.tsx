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
  IonToolbar 
} from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
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
              <div className="login-form">
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Enter your username</IonLabel>
                    <IonInput placeholder="Username" />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Enter your password</IonLabel>
                    <IonInput type="password" placeholder="Password" />
                  </IonItem>
                </IonList>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Login;