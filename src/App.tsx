import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProjectsList from './components/projects/ProjectsList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to="/projects" replace />} path="/" />
        <Route element={<ProjectsList />} path="/projects" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
