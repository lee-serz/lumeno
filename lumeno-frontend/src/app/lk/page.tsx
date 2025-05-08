import { protectPage } from '@/utils/server/protect-page'
import { Plus } from 'lucide-react'

async function DashboardPage() {
	await protectPage()
	return (
		<button className="btn btn-soft btn-circle">
			<Plus />
		</button>
	)
}

export default DashboardPage
