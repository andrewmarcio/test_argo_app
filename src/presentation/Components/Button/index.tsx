import { ButtonProps } from '@ui-kitten/components'
import { FC, memo } from 'react'
import { BaseButton } from './button.styled'

const Button: FC<ButtonProps> = memo(props => {
    return <BaseButton {...props} />
})

export { Button }
