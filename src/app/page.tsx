import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="justify-center align center items-center flex flex-col">
            <h1 className="w-full bg-blue-200 text-4xl font-bold align-center 
            items-center flex flex-col">Bem-Vindo ao Task Manager</h1>
            <br />
            <p>Essa é a página inicial do seu gerenciador de tarefas</p>
            <br /> <br />
            <img src="/images/seed-a-mascot.svg" alt="Logo Seed a Bit" />
            <br /> <br />
            <Link href="/tarefas">
                <Button label="Ir para Tarefas"></Button>
            </Link>
        </div>
    )
}
