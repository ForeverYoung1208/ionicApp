import { IonItem, IonList } from '@ionic/react';
import { Typography } from '@mui/material';
import { UserDto } from 'src/api/dto/users/user.dto';

type TUsersListProps = { users: UserDto[] };

export const UsersList: React.FC<TUsersListProps> = ({ users }) => {
  return (
    <>
      <Typography variant="h5">Users list</Typography>
      <IonList>
        {users.map((user, index) => (
          <IonItem key={index}>
            {index + 1}. {user.name} ({user.id})
          </IonItem>
        ))}
      </IonList>
    </>
  );
};
