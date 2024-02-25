import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formValidateSchema = z.object({
  task: z.string().min(5, 'Informe a tarefa'),
  minutesAmount: z.number().min(5).max(60)
})

type newCycleFormData = z.infer<typeof formValidateSchema>

const Home = () => {
  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(formValidateSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })  

  const handleCreateNewCycle = (data: newCycleFormData) => {
    console.log(data);
    toast.success('Criado com Sucesso')
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <div className="w-full p-2">
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <div className="w-full flex gap-2 items-center justify-center">
          <label htmlFor="task" className="font-bold text-white text-lg ">
            Vou trabalhar em
          </label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className="max-w-[272px] flex-1 bg-transparent border-0 border-b-2 border-b-gray-500 font-bold text-[#7C7C8A] outline-none focus:border-b-[#00875F]"
            list="task-suggestion"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
          </datalist>

          <label
            htmlFor="minutesAmount"
            className="font-medium text-white text-lg"
          >
            durante
          </label>
          <input
            type="number"
            id="minutesAmount"
            className="bg-transparent border-0 border-b-2 border-b-gray-500 font-bold w-[72px] flex  text-[#7C7C8A] outline-none focus:border-b-[#00875F]"
            placeholder="00"
            step={5}
    
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span className="font-medium text-white text-lg">minutos.</span>
        </div>

        <div className="w-full flex gap-4 mt-[60px] items-center justify-center">
          <span className="w-[128px] h-[198.02px] text-white font-bold bg-[#29292E] flex items-center justify-center text-[160px] rounded-lg">
            0
          </span>
          <span className="w-[128px] h-[198.02px] text-white font-bold bg-[#29292E] flex items-center justify-center text-[160px] rounded-lg">
            0
          </span>
          <span className="text-[#00875F] w-[97px] h-[198.02px] font-bold text-[160px] flex items-center justify-center">
            :
          </span>
          <span className="w-[128px] h-[198.02px] text-white font-bold bg-[#29292E] flex items-center justify-center text-[160px] rounded-lg">
            0
          </span>
          <span className="w-[128px] h-[198.02px] text-white font-bold bg-[#29292E] flex items-center justify-center text-[160px] rounded-lg">
            0
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisable}
          className="w-[678px] h-[64px] mt-6 rounded-lg font-bold flex gap-2 items-center justify-center bg-[#00875F] text-[#E1E1E6] disabled:hover:bg-[#00875F] hover:bg-[#00875ebd] disabled:opacity-[0.7] disabled:cursor-not-allowed"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  );
};

export default Home;
