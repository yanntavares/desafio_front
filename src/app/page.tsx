import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="justify-center items-center flex flex-col">

            <h1 className="w-full bg-blue-200 text-2xl md:text-4xl lg:text-4xl font-bold align-center 
            text-center">Bem-Vindo ao Task Manager</h1>

            <p className="md:pt-2 md:text-lg lg:pt-4 lg-text-lg text-center">Essa é a página inicial do seu gerenciador de tarefas</p>

            <div className="p-6 md:p-10 lg:p-12">
            <img src="/images/seed-a-mascot.svg" alt="Logo Seed a Bit" className="w-48 md:w-56 lg:w-56 h-auto" />
            </div>

            <Link href="/tarefas">
                <Button label="Ir para Tarefas"></Button>
            </Link>

        </div>
    )
}
