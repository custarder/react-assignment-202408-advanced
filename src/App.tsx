import { useEffect, useState } from "react"
import User from "./components/User"
import Spinner from "./components/Spinner"
import type { UserData } from "./types/user"



export default function App() {
	const [users, setUsers] = useState<UserData[]>([])
	const [isLoading, setIsLoading] = useState(true)


	const fetchUsers = async (): Promise<UserData[] | null> =>{
		const url = "https://jsonplaceholder.typicode.com/users"
		const res = await fetch(url)
		if (!res.ok) throw new Error(`error status: ${res.status}`)
		return res.json()
	}

	const handleDelete = (username: string):void => {
		setUsers(prev => prev.filter(u => u.username !== username ))

	}

	const handleSave = (updatedUser: UserData):void => {
		setUsers(prev => prev.map( u => u.username === updatedUser.username ? updatedUser : u)) 
	}

	useEffect(() => {
		setIsLoading(true)
		let isMounted = true

		fetchUsers()
			.then((data) => {
				if (isMounted && data) setUsers(data)
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				if (isMounted) setIsLoading(false)
			})

		return () => { isMounted = false }
	},[])

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-[60vh]">
					<Spinner />
				</div>
			) : (
				<div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{users.map((u) => (
						<User
							key={u.username} 
							user={u} 
							onDelete={handleDelete}
							onSave={handleSave}
						/>
					))}
				</div>
			)}
		</>
	)
}