import { Layout, Spin } from 'antd'
import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ConfigPage from './pages/ConfigPage'
import VideoPage from './pages/VideoPage'
import RecordPage from './pages/RecordPage'
import useLoading from './hooks/useLoading'

const App: React.FC = () => {
  const { isLoading } = useLoading()
  return (
    <Layout>
      <Router>
        <Header />
        <Spin spinning={isLoading} size="large" tip="動画を比較しています。">
          <Layout>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/config" component={ConfigPage}></Route>
            <Route path="/video/:title" component={VideoPage}></Route>
            <Route path="/record/:title" component={RecordPage}></Route>
          </Layout>
        </Spin>
      </Router>
    </Layout>
  )
}

export default App
