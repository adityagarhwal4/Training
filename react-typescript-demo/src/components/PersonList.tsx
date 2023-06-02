type PersonListProps = {
    name:{
        fName: string,
        lName: string
    }[]
}

export default function PersonList(props: PersonListProps) {
  return (
    <div>
        {props.name.map((element) => {
            return <h2>{`${element.fName} ${element.lName}`}</h2>
        })}
    </div>
  )
}
