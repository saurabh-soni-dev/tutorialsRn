export interface listCardProps {
    item: ItemProps,
    index: number
    onPress: () => void
}

interface ItemProps {
    id: number | undefined,
    name: string | undefined
}