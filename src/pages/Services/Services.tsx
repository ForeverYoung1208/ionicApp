import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Services: React.FC = () => {
  const name = 'Services';

  const services: Array<string | ReactElement> = ['Service1', 'Service2', 'Service3', 'Service4', 'Service5'];
  services.push(
    <p>
      Explore{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
        UI Components
      </a>
    </p>,
  );
  return (
    <ServicesContent fullscreen>
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
    </ServicesContent>
  );
};

const ServicesContent = styled.div`
  background-color: var(--ion-color-light);
`;

export default Services;
