import { IonButton, IonTitle } from "@ionic/react";
import styled from "@emotion/styled";
import { ResponseTokenDto } from '../../api/dto/auth/response-token.dto';
import { useAuthedUser } from "../../hooks/use-authed-user";

export const CurrentUser: React.FC<
  {setTokens: (tokens: ResponseTokenDto) => void}
> = ({setTokens}) => {
  
  const handleLogout = () => {
    setTokens({ accessToken: '', refreshToken: '' });
    window.location.reload();
  };
  
  const { sub: userId } = useAuthedUser();
  
  return (
    <LogoutFormContainer>
      <IonTitle>Hello, Current User {userId}</IonTitle>
      <IonButton fill="solid" expand="block" onClick={handleLogout}>Logout</IonButton>
    </LogoutFormContainer>
  );
};

const LogoutFormContainer = styled.div`
  padding: 20px;
`;

  
