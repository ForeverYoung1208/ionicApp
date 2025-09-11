import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { UsersList } from './UsersList/UsersList';
import { useAppDispatch } from '../../redux/store/store';
import { getUsers } from '../../redux/reducers/users/actionCreators/getUsers';
import { useSelector } from 'react-redux';
import { allUsersSelector, totalUsersSelector } from '../../redux/selectors/usersSelector';
import { Typography } from '@mui/material';

const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(allUsersSelector);
  const total = useSelector(totalUsersSelector);

  return (
    <AdminContentStyled>
      <UsersListContainerStyled>
        <UsersList users={users} />
      </UsersListContainerStyled>
      <TotalUsersStyled>Total users: {total}</TotalUsersStyled>
    </AdminContentStyled>
  );
};

const AdminContentStyled = styled.div`
  --background: var(--ion-color-light);
`;

const UsersListContainerStyled = styled.div`
  padding: 16px;
`;

const TotalUsersStyled = styled(Typography)`
  margin-top: 16px;
`;

export default AdminPage;
