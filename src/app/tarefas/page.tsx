import { Button } from "@/components/ui/Button";
import { Task } from "@/components/ui/Task";
import Link from "next/link";
import { allTasks } from "@/data/tasks";

const items_per_page = 10;

export default async function TarefasPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10); // parseInt tranforma em inteiro, primeiro parâmetro é a página, o segundo
  //  é a base (decimal)
  const statusFilter = params.status || "all";

  //Filtrando primeiro antes de dispor na página
  const filteredTasks = allTasks.filter((task) => {
    if (statusFilter === "completed") return task.isCompleted;
    if (statusFilter === "pending") return !task.isCompleted;
    return true;
  });

  //Calculando quantidade de páginas depois de filtrado
  const totalPages = Math.ceil(filteredTasks.length / items_per_page); //Math.ceil arrendonda para cima
  const page = Math.max(1, Math.min(currentPage, totalPages));

  //Paginação
  const startIndex = (page - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex); //.slice corta o array entre os índices

  //Definindo existencia de páginas anteriores e próximas
  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  return (
    <div className="flex flex-col items-center">
        {/* Textos iniciais */}
      <h3
        className="w-full bg-blue-200 font-bold text-3xl align-center 
            items-center flex flex-col "
      >
        Tarefas
      </h3>
      <p className="text-gray-600 mt-4">
        Página {page} de {totalPages}
      </p>

      {/* Botões de filtro */}
      <div className="flex gap-4 pt-6">
        <Link href="/tarefas?status=all">
          <Button
            label="Todas"
          />
        </Link>

        <Link href="/tarefas?status=pending">
          <Button
            label="Pendentes"
          />
        </Link>

        <Link href="/tarefas?status=completed">
          <Button
            label="Completas"
          />
        </Link>
      </div>

      {/* Grid de tasks */}
      <div className="grid grid-cols-3 gap-8 pt-12 justify-items-center">
        {paginatedTasks.map((task) => ( // Render dinâmica das tasks
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            imageSource={task.imageSource}
            isTaskCompleted={task.isCompleted}
          />
        ))}
      </div>

        {/* Botões de navegação entre páginas */}
      <footer className="p-6 flex justify-center items-center gap-8">
        {previousPage ? (
          <Link href={`/tarefas?page=${previousPage}&status=${statusFilter}`}>
            {/* Manter o statusFilter ao navegar */}
            <Button label="Anterior"></Button>
          </Link>
        ) : (
          <Link href="./">
            <Button label="Anterior"></Button>
          </Link>
        )}

        {nextPage ? (
          <Link href={`/tarefas?page=${nextPage}&status=${statusFilter}`}> 
            {/* Manter o statusFilter ao navegar */}
            <Button label="Próximo"></Button>
          </Link>
        ) : (
          <Button label="Próximo"></Button>
        )}
      </footer>
    </div>
  );
}
