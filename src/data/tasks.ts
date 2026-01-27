// Mock data para as tarefas
export const allTasks = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Tarefa ${i + 1}`,
    description: 'preciso terminar o desafio o mais rápido possível para entregar no prazo correto',
    imageSource: '/images/seed-a-mascot.svg',
    isCompleted: i % 4 === 0
}));
