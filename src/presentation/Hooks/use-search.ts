import { useCallback, useState } from "react"

function useSearch() {
    const [searchValue, setSearchValue] = useState<string>('')

    const _setSearchValue = useCallback((value: string) => {
        setSearchValue(_ => value)
    }, [])

    return {
        searchValue,
        setSearchValue: _setSearchValue,
    }
}

export { useSearch }