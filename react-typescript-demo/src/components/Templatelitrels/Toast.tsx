
type HorizontalPosition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export default function Toast({position}: ToastProps) {
  return (
    <div>
        Toast notification position - {position}
    </div>
  )
}
