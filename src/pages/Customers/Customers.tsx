import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Customers.css';

const Customers: React.FC = () => {
  const customers = ['Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5']
  const name = 'Customers'

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          {customers.map((customer, index) => (
            <IonItem key={index}>
              <IonLabel>{customer}</IonLabel>
            </IonItem>
          ))}
      </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Customers;
