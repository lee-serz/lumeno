import MainLayout from '@/components/mainLayout/MainLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
	return <MainLayout>{children}</MainLayout>
}
