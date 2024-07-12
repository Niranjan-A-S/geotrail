import { FC, memo } from "react"

export const AttractionItem: FC<{ name: string }> = memo(({ name }) => {
    return <li >{name}</li>
})