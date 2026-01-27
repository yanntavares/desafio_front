import '../globals.css'


export default function TasksLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section>
            {children}
        </section>
    )
}
