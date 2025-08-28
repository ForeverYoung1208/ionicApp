import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ReactElement } from 'react';
import './Services.css';

const Services: React.FC = () => {

  const name = 'Services'
  
  const services: Array<string | ReactElement> = ['Service1', 'Service2', 'Service3', 'Service4', 'Service5'];
  services.push(<p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>)
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

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {services.map((service, index) => (
            <IonItem key={index}>
              <IonLabel>{service}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const ServicesContent = styled(IonContent)`
  


export default Services;
