import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from '@emotion/styled';
import React, { useEffect, useMemo } from 'react';
import { UsersService } from '../../api/services/users-service';
import { UserDto } from '../../api/dto/users/user.dto';

const AdminPage: React.FC = () => {
  const name = 'Admin';
  
  const [users, setUsers] = React.useState<UserDto[]>([]);
  const usersService = useMemo(() => new UsersService(), []); // todo: move to context or redux
  
  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await usersService.getAll();
      setUsers(data);
    }
    fetchUsers();
  }, [usersService]);

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

      <AdminContentStyled>
        <IonList>
          {users.map((user, index) => (
            <IonItem key={index}>
              <IonLabel>{user.id} {user.name} {user.email}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </AdminContentStyled>
    </IonPage>
  );
}

const AdminContentStyled = styled(IonContent)`
  --background: var(--ion-color-light);
`;

export default AdminPage;
