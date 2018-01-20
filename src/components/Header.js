import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu
} from 'semantic-ui-react'

const Header = () => (
  <header>
    <Menu>
      <Menu.Item>
        <Link to="/">Главная</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/company">О компании</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contacts">Контакты</Link>
      </Menu.Item>
    </Menu>
  </header>
)

export default Header;
