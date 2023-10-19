import { FC, memo } from "react";
import { Input as InputKitten, InputProps } from '@ui-kitten/components'

const Input: FC<InputProps> = memo(props => {
    return <InputKitten { ...props } />
})

export { Input }