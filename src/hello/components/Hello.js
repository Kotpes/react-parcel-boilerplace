// @flow

import * as React from 'react'
import {observer, inject} from 'mobx-react'
import css from './Hello.css'



type Props = {
  store: {
    sayHello: Function,
    message: string,
  }
}

@inject("store")
@observer
export class Hello extends React.Component<Props> {
  componentDidMount() {
    this.props.store.sayHello()
  }

  render() {
    return (
      <div className={css.component}>
        <h1 className={css.title}>{this.props.store.message}</h1>
      </div>
    )
  }
}

export default Hello
