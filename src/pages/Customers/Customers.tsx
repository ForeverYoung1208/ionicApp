import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from '@emotion/styled';
import { SelectChangeEvent } from '@mui/material';
import React from 'react';
import { MuiMultiselect } from '../../components/MuiMultiselect/MuiMultiselect';

const Customers: React.FC = () => {
  const customers = ['Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5']
  const name = 'Customers'
  const [selectedCustomers, setSelectedCustomers] = React.useState<string[]>([]);
  
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCustomers(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
  }
  

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

      <CustomersContentStyled>
        <IonList>
          {customers.map((customer, index) => (
            <IonItem key={index}>
              <IonLabel>{customer}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <MuiMultiselect
          items={customers}
          selectedItems={selectedCustomers}
          handleChange={handleChange}
          label="Customers"
        />
      </CustomersContentStyled>
    </IonPage>
  );
}

const CustomersContentStyled = styled(IonContent)`
  --background: var(--ion-color-light);
`;

export default Customers;
