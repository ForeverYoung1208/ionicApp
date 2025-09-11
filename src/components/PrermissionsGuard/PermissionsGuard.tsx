import { useSelector } from "react-redux";
import { authedUserSelector } from "../../redux/selectors/authSelectors";
import { Redirect } from "react-router-dom";
import { TRouteGuardProps } from "../../routes/routes";


export const PermissionsGuard: React.FC<TRouteGuardProps> = ({ children, options }) => {
  const authedUser = useSelector(authedUserSelector);

  if (options.onlyForAuthedUser && !authedUser?.id) {
    return <Redirect to="/Login" />;
  }

  return children;
};