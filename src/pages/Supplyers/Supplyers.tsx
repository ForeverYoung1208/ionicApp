import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import MyMap from '../../components/Map/Map';

const Supplyers: React.FC = () => {
  const name = 'Supplyers';

  return (
    <div>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <MyMap />
    </div>
  );
};

export default Supplyers;
