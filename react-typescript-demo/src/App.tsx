import './App.css'
import Text from './components/polimorphic/Text'
// import Button from './components/httml/Button'
// import Toast from './components/Templatelitrels/Toast'
// import RandomNo from './components/restriction/RandomNo'
// import List from './components/generic/List'
// import Private from './components/Auth/Private'
// import Profile from './components/Auth/Profile'
// import Counter from './components/class/Counter'
// import MutableRef from './components/ref/MutableRef'
// import DomRef from './components/ref/DomRef'
// import User from './components/state/context/User'
// import UserContextProvider from './components/state/context/UserContext'
// import Box from './components/state/context/Box'
// import ThemeContext from './components/state/context/ThemeContext'
// import Counter from './components/state/Counter'
// import LoggedIn from './components/state/LoggedIn'
// import User from './components/state/User'
// import Container from './components/Container'
// import Input from './components/Input'
// import Button from './components/Button'
// import Heading from './components/Heading'
// import Oscar from './components/Oscar'
// import Status from './components/Status'
// import Greet from './components/Greet'
// import Person from './components/Person'
// import PersonList from './components/PersonList'

function App() {
  // const personName = {
  //   fName: "Aditya",
  //   lName: "Garhwal"
  // }

  // const nameList = [
  //   {
  //     fName: "Aditya",
  //     lName: "Garhwal"
  //   },
  //   {
  //     fName: "Sumit",
  //     lName: "Jangra"
  //   },
  //   {
  //     fName: "Deepak",
  //     lName: "Garg"
  //   },
  // ]

  return (
    <>
      <div>
        {/* <Greet name='Aditya' messageCount={10} isloggedIn={false} />
        <Person name={personName} />
        <PersonList name={nameList} /> */}
        {/* <Status status='success' /> */}
        {/* <Heading>PlaceHolder Text</Heading>
        <Oscar>
          <Heading>Oscar goes to Amitabh Bachan</Heading>
        </Oscar> */}
        {/* <Button handleClick={(event, id) => {
          console.log(id, 'Button Clicked', event)
        }}/> */}
        {/* <Input value='' handleChange={(event) => {
          console.log(event);
        }} /> */}
        {/* <Container styles={{border: '2px solid black', padding: '1rem'}} /> */}
        {/* <LoggedIn /> */}
        {/* <User /> */}
        {/* <Counter /> */}
        {/* <ThemeContext>
          <Box />
        </ThemeContext> */}
        {/* <UserContextProvider>
          <User />
        </UserContextProvider> */}
        {/* <DomRef /> */}
        {/* <MutableRef /> */}
        {/* <Counter /> */}
        {/* <Private isLoggedIn={true} component={<Profile />} /> */}
        {/* <List items={['Apple', 'Banana', 'Mango']} onClick={(element) => console.log(element)} />
        <List items={[1, 2, 3]} onClick={(element) => console.log(element)} />
        <List items={[{first: 'Aditya', last: 'Garhwal'}, {first: 'Dakshay', last: 'Bishnoi'}, {first: 'Naveen', last: 'Garhwal'}]} onClick={(element) => console.log(element)} /> */}
        {/* <RandomNo value={10} isPositive = {true} /> */}
        {/* <Toast position='center' /> */}
        {/* <Button varient='primary' onClick={() => console.log('clicked')} /> */}
        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' size='sm' color='secondary'>
          Label
        </Text>
      </div>
    </>
  )
}

export default App
