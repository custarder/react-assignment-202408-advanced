import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { CardData } from "../types/card"


export default function Card({name, email, phone, website, liked, onLikeClick, onEditClick, onDeleteClick}: CardData) {
	return (
		<div className="m-[15px] flex flex-col bg-white overflow-hidden border border-color[#E8E8E8]">
			<div className="flex items-center justify-center bg-[#F5F5F5]">
				<img
					src={`https://api.dicebear.com/9.x/personas/svg?seed=${name}`}
					alt="avatar"
					className="w-[200px] h-[200px] object-cover bg-gray-300"
				/>
			</div>

			<div className="p-[24px] flex flex-col justify-center">
				<div>
					<h3 className="text-[16.38px] font-[500] mb-[8.19px]">{name}</h3>
				</div>

				<div className="text-[14px]">
					<div className="flex flex-row">
						<FontAwesomeIcon icon="envelope" />
						<p className="ml-[10px] mb-[5px]">{email}</p>
					</div>
					<div className="flex flex-row">
						<FontAwesomeIcon icon="phone" />
						<p className="ml-[10px] mb-[5px]">{phone}</p>
					</div>
					<div className="flex flex-row">
						<FontAwesomeIcon icon="globe" />
						<p className="ml-[10px] mb-[5px]">{website}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row text-[20px] items-center bg-[#FAFAFA]">
				<div className="flex-1 py-[12px] flex justify-center border border-color[#E8E8E8]">
					<button className="text-red-500" onClick={onLikeClick}>
						{liked? (<FontAwesomeIcon icon={['fas', 'heart']} />) : (<FontAwesomeIcon icon={['far', 'heart']} />)}
					</button>
				</div>
				<div className="flex-1 py-[12px] flex justify-center border border-color[#E8E8E8]">
					<button onClick={onEditClick}><FontAwesomeIcon icon="user-pen" /></button>
				</div>
				<div className="flex-1 py-[12px] flex justify-center border border-color[#E8E8E8]">
					<button onClick={onDeleteClick}><FontAwesomeIcon icon="trash" /></button>
				</div>
			</div>
		</div>
	)
}