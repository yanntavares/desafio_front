import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Task Manager',
    description: 'Sua aplicação de gerenciamento de tarefas',
    applicationName: 'Task ',
    authors: [{ url: 'https://seedabit.org.br', name: 'Seed a Bit' }],
    keywords: ['palavra-chave', 'palavra-chave'],
    creator: 'Seed a Bit',
    publisher: 'Seed a Bit',
    abstract: 'Descrição do App',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased 
                px-32 pt-12 bg-slate-200`}
            >
                {children}
            </body>
        </html>
    )
}
