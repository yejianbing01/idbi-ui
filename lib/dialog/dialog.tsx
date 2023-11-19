import React, { FC } from 'react'
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../helpers/classes';
const sc = scopedClassMaker('idbi-dialog')

interface DialogProps {
  visible?: boolean
  title: string
}
const Dialog: FC<DialogProps> = (props) => {
  return (
    props.visible
      ?
      <>
        <div className={sc('mask')} />
        <div className={sc('')}>
          <header className={sc('header')}>
            <div className={sc('header-title')}>
              {props.title}
            </div>
            <div className={sc('header-close')}>
              <Icon name='close' />
            </div>
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </>
      : null
  )
}

export default Dialog