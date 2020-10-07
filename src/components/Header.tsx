import { Layout, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Layout>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/config">Config</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  )
}

export default Header
