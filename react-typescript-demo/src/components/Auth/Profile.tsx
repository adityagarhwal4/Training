
export type ProfileProps = {
    name: string
}

export default function Profile({name}: ProfileProps) {
  return (
    <div>
        Private File Component. Name is {name}.
    </div>
  )
}
