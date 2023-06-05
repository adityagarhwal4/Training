type InputProps = React.ComponentProps<'input'>
export default function Input(props: InputProps) {
  return (
    <div>
        <input type="text" {...props} />
    </div>
  )
}
