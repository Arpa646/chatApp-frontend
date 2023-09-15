import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hiii
      </h1>
      <Button colorScheme='blue'>Button</Button>
      <Checkbox defaultChecked>Checkbox</Checkbox>
    </>
  )
}

export default App
