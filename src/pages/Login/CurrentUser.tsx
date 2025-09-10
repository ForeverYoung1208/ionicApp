import { IonButton, IonTitle } from "@ionic/react";
import styled from "@emotion/styled";
import { signOut } from 'src/redux/reducers/auth/actionCreators/signOut';
import { useAppDispatch } from 'src/redux/store/store';
import { TAuthedUser } from '../../redux/reducers/auth/types';

type CurrentUserProps = { authedUser: TAuthedUser };

export const CurrentUser: React.FC<CurrentUserProps> = ({ authedUser }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <LogoutFormContainer>
      <IonTitle>Hello, {authedUser.name}</IonTitle>
      <IonButton fill="solid" expand="block" onClick={handleLogout}>
        Logout
      </IonButton>
    </LogoutFormContainer>
  );
};

const LogoutFormContainer = styled.div`
  padding: 20px;
`;

  
