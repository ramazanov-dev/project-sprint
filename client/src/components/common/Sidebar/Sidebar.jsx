// src/components/common/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Icon, Menu } from 'semantic-ui-react';
import classNames from 'classnames';

import selectors from '../../../selectors';
import entryActions from '../../../entry-actions';
import { UserRoles } from '../../../constants/Enums';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [activeItem, setActiveItem] = useState('main');

  const currentUser = useSelector(selectors.selectCurrentUser);
  const isAdmin = currentUser?.role === UserRoles.ADMIN;

  const handleItemClick = (name) => {
    setActiveItem(name);

    switch (name) {
      case 'main':
        // навигация на главную
        break;
      case 'messages':
        // навигация в сообщения
        break;
      case 'settings':
        dispatch(entryActions.openUserSettingsModal());
        break;
      case 'administration':
        dispatch(entryActions.openAdministrationModal());
        break;
      case 'help':
        dispatch(entryActions.openAboutModal());
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    dispatch(entryActions.logout());
  };

  const handleThemeToggle = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Icon name="project diagram" />
        </div>
        <div className={styles.logoText}>московский политех</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Основное</div>
        <Menu vertical className={styles.menu}>
          <Menu.Item
            className={classNames(styles.menuItem, { [styles.active]: activeItem === 'main' })}
            onClick={() => handleItemClick('main')}
          >
            <Icon name="home" className={styles.icon} />
            Главная
          </Menu.Item>

          <Menu.Item
            className={classNames(styles.menuItem, { [styles.active]: activeItem === 'theme' })}
            onClick={handleThemeToggle}
          >
            <Icon name="sun" className={styles.icon} />
            Светлая тема
          </Menu.Item>

          <Menu.Item
            className={classNames(styles.menuItem, { [styles.active]: activeItem === 'messages' })}
            onClick={() => handleItemClick('messages')}
          >
            <Icon name="mail outline" className={styles.icon} />
            Сообщения
          </Menu.Item>

          <Menu.Item
            className={classNames(styles.menuItem, { [styles.active]: activeItem === 'settings' })}
            onClick={() => handleItemClick('settings')}
          >
            <Icon name="settings" className={styles.icon} />
            Настройки
          </Menu.Item>
        </Menu>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Дополнительно</div>
        <Menu vertical className={styles.menu}>
          <Menu.Item className={styles.menuItem}>
            <Icon name="world" className={styles.icon} />
            Русский
          </Menu.Item>

          <Menu.Item
            className={classNames(styles.menuItem, { [styles.active]: activeItem === 'help' })}
            onClick={() => handleItemClick('help')}
          >
            <Icon name="question circle" className={styles.icon} />
            Справка
          </Menu.Item>

          <Menu.Item
            className={styles.menuItem}
            onClick={handleLogout}
          >
            <Icon name="log out" className={styles.icon} />
            Помощь
          </Menu.Item>
        </Menu>
      </div>

      {isAdmin && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Управление</div>
          <Menu vertical className={styles.menu}>
            <Menu.Item
              className={classNames(styles.menuItem, { [styles.active]: activeItem === 'administration' })}
              onClick={() => handleItemClick('administration')}
            >
              <Icon name="shield" className={styles.icon} />
              Администрирование
            </Menu.Item>
          </Menu>
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.version}>v1.0.0</div>
      </div>
    </div>
  );
};

export default Sidebar;
