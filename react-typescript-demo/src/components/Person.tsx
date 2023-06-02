type PersonProps = {
    name:{
        fName: string,
        lName: string
    }
}

export default function Person(props: PersonProps) {
  return (
    <div>{`${props.name.fName} ${props.name.lName}`}</div>
  )
}
