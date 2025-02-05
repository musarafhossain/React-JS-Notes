import './App.css'
import ClassEvent from './ClassEvent' 
import FunctionEvent from './FunctionEvent'
import ControlledComponent from './ControlledComponent'
import UncontrolledComponent from './UncontrolledComponent'
import RegistrationForm from './RegistrationForm'

function App() {

  return (
    <>
      <FunctionEvent/>
      <ClassEvent/>
      <ControlledComponent/>
      <UncontrolledComponent/>
      <RegistrationForm/>
    </>
  )
}

export default App
