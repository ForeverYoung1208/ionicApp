import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from '@emotion/styled';
import { SelectChangeEvent } from '@mui/material';
import React from 'react';
import { MuiMultiselect } from 'src/components/MuiMultiselect/MuiMultiselect';
import { getCustomes } from 'src/redux/reducers/customers/actionCreators/getCustomers';
import { useSelector } from 'react-redux';
import { allCustomersSelector } from '../../redux/selectors/customersSelectors';
import { useAppDispatch } from '../../redux/store/store';

const Customers: React.FC = () => {
  const customers = ['Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5'];
  const name = 'Customers';
  const dispatch = useAppDispatch();
  const [selectedCustomers, setSelectedCustomers] = React.useState<string[]>([]);

  React.useEffect(() => {
    dispatch(getCustomes());
  }, [dispatch]);

  const allCustomers = useSelector(allCustomersSelector);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCustomers(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
  };

  return (
    <CustomersContentStyled>
      {allCustomers.map((customer, index) => (
        <IonItem key={index}>
          <IonLabel>{customer.name}</IonLabel>
        </IonItem>
      ))}
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
  );
};

const CustomersContentStyled = styled.div`
  --background: var(--ion-color-light);
`;

export default Customers;
