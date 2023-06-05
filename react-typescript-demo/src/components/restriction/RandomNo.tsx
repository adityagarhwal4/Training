type RandomNoType = {
    value: number
}
type PositiveNo = RandomNoType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNo = RandomNoType & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}
type ZeroNo = RandomNoType & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}
type RandomNoProps = PositiveNo | NegativeNo | ZeroNo
export default function RandomNo({value, isPositive, isNegative, isZero}: RandomNoProps) {
  return (
    <div>
        {value} {isPositive && 'is positive'} {isNegative && 'is negative'} {isZero && 'is zero'}
    </div>
  )
}
