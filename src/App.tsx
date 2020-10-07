import { Layout, Spin } from 'antd'
import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ConfigPage from './pages/ConfigPage'
import useIsLoading from './hooks/useIsLoading'
import VideoPage from './pages/VideoPage'

const App: React.FC = () => {
  const { isLoading } = useIsLoading()
  return (
    <Layout>
      {isLoading ? (
        <Spin tip="Loading..."></Spin>
      ) : (
        <Router>
          <Header />
          <Layout>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/config" component={ConfigPage}></Route>
            <Route path="/video/:title" component={VideoPage}></Route>
          </Layout>
        </Router>
      )}
    </Layout>
  )
}

export default App
