type Buttonprops = {
    varient: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export default function Button({varient, children, ...rest}: Buttonprops) {
  return (
    <div>
        <button className={`class-with-${varient}`} {...rest}>Children</button>
    </div>
  )
}
