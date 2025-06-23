import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, Collapse, Select, Dropdown } from '@easy/ui'
import './index.css'
const divider = {
  width: '100%',
  height: '1px',
  margin: '5vh 0',
  backgroundColor: '#000',
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{
      width: '50vw',
      height: '100vh',
      margin: '0 auto',
    }}>
      <Button>Hello from UI</Button>
      <div style={divider} />
      <Collapse title="hajimi">129</Collapse>
      <div style={divider} />
      <Dropdown />
      <div style={divider} />
      <Select
        onChange={(val) => console.log(val)}
        options={[{ label: 'A', value: 'a' }]}
      />
      <div style={divider} />
      <Select
        multiple
        onChange={(val) => console.log(val)}
        options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, { label: 'C', value: 'c' }]}
      />
    </div>

  </React.StrictMode>,
)
