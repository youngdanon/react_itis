import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createHttpClient } from 'mst-gql'
import { RootStore, StoreContext } from './models'

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('https://task-tracker-itis.herokuapp.com/graphql'),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = rootStore
