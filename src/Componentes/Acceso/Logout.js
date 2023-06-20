import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../routes/routes';
import { resetUser, UserKey } from '../../redux/state/user';
import { clearLocalStorage } from '../../utilities/localStorage.utility';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return <button className="nav-link btn btn-primary" onClick={logOut}>Cerrar Sesión</button>;
}
export default Logout;