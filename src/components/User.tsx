import { useState } from "react";
import Card from "./card";
import Modal from "./modal";
import type { UserData } from "../types/user";

type UserProps = {
	user: UserData
	onDelete: (username: string) => void
	onSave: (updatedUser: UserData) => void
}

export default function User({ user, onDelete, onSave }: UserProps, ) {
	const [isLiked, setIsLiked] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [userData, setUserData] = useState(user)
	const editableFields: (keyof Pick<UserData, "name" | "email" | "phone" | "website">)[] = ["name", "email", "phone", "website"]

	const handleLiked = ():void => {
		setIsLiked(prev => !prev)
	}

	const handleEdit = ():void => {
		setIsEditing(true)
	}

	const handleSave = (e: React.FormEvent<HTMLFormElement>):void => {
		e.preventDefault()
		onSave(userData)
		setIsEditing(false)
	}

	const handleClose = ():void => {
		setIsEditing(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
		const { name, value } = e.target
		setUserData((prev) => ({
			...prev,
			[name]: value
		}))
	}

	const handleDeleteClick = ():void => {
		onDelete(userData.username)
	}

	return (
		<>
			<Card
				username={userData.username}
				name={userData.name}
				email={userData.email}
				phone={userData.phone}
				company={userData.company}
				website={userData.website}
				address={userData.address}
				liked={isLiked}
				onLikeClick={handleLiked}
				onEditClick={handleEdit}
				onDeleteClick={handleDeleteClick}
			/>

			<Modal isOpen={isEditing} onClose={() => handleClose()}>
				<form onSubmit={(e) => handleSave(e)}>
					<div className="p-[24px] border-b border-[#e8e8e8]">
						{editableFields.map((f) => (
							<div key={f} className="flex flex-row justify-end items-center mb-[24px]">
								<label
									htmlFor={f}
									className="pr-[8px]">
										<span className="text-red-400 pr-[2px]">*</span>
										{f.charAt(0).toUpperCase() + f.slice(1)}:
								</label>
								<div>
									<input
										id={f}
										name={f}
										type="text"
										value={userData[f]} 
										onChange={(e) => handleChange(e)}
										className="text-gray-500 w-[314.664px] border border-gray-300 rounded-md py-[4px] px-[11px]" 
									/>
								</div>
							</div>
						))}
					</div>
					<div className="py-[10px] px-[16px] flex justify-end">
						<button
							onClick={() => handleClose()} 
							type="button" 
							className="border rounded-md px-[15px] h-[32px] text-gray-600"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md px-[15px] ml-[8px] text-white bg-blue-500">
								OK
						</button>
					</div>
				</form>
			</Modal>
		</>
	)


}