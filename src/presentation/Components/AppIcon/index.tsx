import { Icon, IconElement, IconProps } from '@ui-kitten/components'
import { FC, memo } from 'react'

const AppIcon: FC<IconProps> = memo((props): IconElement => {
    return <Icon {...props} />
})

export { AppIcon }
