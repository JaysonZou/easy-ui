import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Collapse, Select, Dropdown } from '@easy/ui'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button>Hello from UI</Button>
    <Collapse title="hajimi">129</Collapse>
    <Dropdown />
    
    <h1>Single Select</h1>
    <Select 
      onChange={(val) => console.log(val)} 
      options={[{label: 'A', value: 'a'}]} 
    />

    <h1>Multiple Select</h1>
    <Select
      multiple
      onChange={(val) => console.log(val)}
      options={[{label: 'A', value: 'a'}, {label: 'B', value: 'b'}, {label: 'C', value: 'c'}]}
    />
  </React.StrictMode>,
)
