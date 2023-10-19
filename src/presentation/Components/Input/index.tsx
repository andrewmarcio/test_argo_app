import { FC, memo, useMemo } from 'react'
import { Input as InputKitten, InputProps } from '@ui-kitten/components'
import { AppIcon } from '../AppIcon'

const Input: FC<InputProps> = memo(props => {
    return <InputKitten {...props} />
})

const InputSearch: FC<
    InputProps & {
        onClearInput?(): void
    }
> = memo(({ onClearInput, value, ...props }) => {
    const SearchInputIcon = useMemo(() => {
        if (value?.length) {
            return <AppIcon name="close-outline" onPress={onClearInput} />
        }

        return <AppIcon name="search-outline" />
    }, [value])
    
    return <InputKitten {...props} value={value} accessoryRight={SearchInputIcon} />
})

export { Input, InputSearch }
