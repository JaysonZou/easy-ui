import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Collapse } from '@easy/ui'
import { Dropdown } from '@easy/ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button>Hello from UI</Button>
    <Collapse title="hajimi">129</Collapse>
    <Dropdown />
  </React.StrictMode>,
)
