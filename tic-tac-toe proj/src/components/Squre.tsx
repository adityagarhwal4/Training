
type SqureProps = {
    value: 'X' | 'O' | null,
    onSqureClick: () => void
}

export default function Squre({value, onSqureClick}: SqureProps) {
    return (
            <button onClick={onSqureClick} style={{height: '100px', width: '100px',}}>{value}</button>
    )
}
