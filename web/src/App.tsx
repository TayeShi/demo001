import { Routes, Route } from 'react-router-dom'
import rootRoutes from '@/router'
import './App.scss'

function App() {

  return (
    <div className='app-wapper'>
      <Routes>
        {
          rootRoutes.map((route, key) => {
            return <Route
              key={'route-' + key}
              path={route.path}
              element={<route.component />} >
            </Route>
          })
        }
      </Routes>
    </div>
  )
}

export default App
