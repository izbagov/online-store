import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

const Header = () => (
  <header>
    <Menu>
      <Menu.Item>
        Главная
      </Menu.Item>
      <Menu.Item>
        Продукция
      </Menu.Item>
      <Menu.Item>
        О компаниии
      </Menu.Item>
      <Menu.Item>
        Контакты
      </Menu.Item>
    </Menu>
  </header>
)

export default Header;
