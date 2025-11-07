import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ModalProps } from "../types/modal";



export default function Modal({isOpen, onClose, children}: ModalProps) {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="absolute inset-0 bg-[#000000a6]" onClick={onClose}></div>
			<div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-lg translate-y-[-15.5vh]">
				<div className="px-[24px] py-[16px] border-b border-color[#e8e8e8] relative ">
					<p className="text-[16px] text-[#000000d9] font-[500]">Edit Profile</p>
					<div className="w-[56px] h-[56px] absolute right-0 top-0 flex items-center justify-center">
						<button onClick={onClose} className="text-[16px] text-gray-400"><FontAwesomeIcon icon="x" /></button>
					</div>
				</div>
				<div className="text-[14px]">
					{children}
				</div>

			</div>

		</div>
	)
}