import Header from '@/app/_components/Header'

export async function generateMetadata({ params: { slug } }: any) {
    return {
        title: slug,
        description: slug,
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}