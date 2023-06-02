
type Container = {
    styles: React.CSSProperties
}

export default function Container(props: Container) {
  return (
    <div style={props.styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus.</div>
  )
}
