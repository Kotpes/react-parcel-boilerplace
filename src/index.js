// @flow

import React, {createElement} from 'react'
import {render} from 'react-dom'
import Root from './root/components/Root'
import {Provider} from 'mobx-react'
import store from './stores/store'
import './index.css'

//Gotta check for null to prevent flow from complaining
const rootElement = document.getElementById('root')
if (rootElement === null) {
  throw new Error('No #root element is found')
}

const renderApp = (component: any) =>
  render(
    <Provider store={store}>
      {createElement(component)}
    </Provider>,
    rootElement
  )

renderApp(Root)
