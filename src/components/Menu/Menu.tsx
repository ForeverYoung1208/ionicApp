import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, logInOutline, mapOutline, paperPlaneOutline, paperPlaneSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { TAuthedUser } from '../../redux/reducers/auth/types';
import { useSelector } from 'react-redux';
import { authedUserSelector } from '../../redux/selectors/authSelectors';

interface MenuItem {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  isShown: (authedUser: TAuthedUser | null) => boolean;
}

const isUserAuthed = (authedUser: TAuthedUser | null) => !!authedUser?.id;

const menuItems: MenuItem[] = [
  {
    title: 'Login',
    url: '/Login',
    iosIcon: logInOutline,
    mdIcon: logInOutline,
    isShown: () => true,
  },
  {
    title: 'Services',
    url: '/Services',
    iosIcon: mapOutline,
    mdIcon: mapOutline,
    isShown: () => true,
  },
  {
    title: 'Supplyers',
    url: '/Supplyers',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    isShown: () => true,
  },
  {
    title: 'Customers',
    url: '/Customers',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
    isShown: () => true,
  },
  {
    title: 'Admin',
    url: '/Admin',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
    isShown: isUserAuthed,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const authedUser = useSelector(authedUserSelector);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Hello</IonListHeader>
          <IonNote>Dear guest, login or register to get access to all features</IonNote>
          {menuItems.map((appPage, index) => {
            return appPage.isShown(authedUser) ? (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ) : null;
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
