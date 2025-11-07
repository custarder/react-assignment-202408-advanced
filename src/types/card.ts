import type { UserData } from "./user"

export type CardData = UserData & {
	liked: boolean
	onLikeClick: () => void
	onEditClick: () => void
	onDeleteClick: () => void
}