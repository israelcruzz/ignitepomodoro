import Status from "../../components/status";

const History = () => {
  return (
    <div>
      <h1 className="font-bold text-[#E1E1E6] text-2xl mb-8 mt-4">
        Meu histórico
      </h1>

      <table className="w-full border-collapse">
        <thead className="bg-[#323238] text-[#E1E1E6] text-sm font-bold h-[54px] text-left">
          <tr>
            <th style={{ borderRadius: "8px 0px 0px 0px" }} className="p-4">
              Tarefa
            </th>
            <th>Duração</th>
            <th>Início</th>
            <th style={{ borderRadius: "0px 8px 0px 0px" }}>Status</th>
          </tr>
        </thead>
        <tbody className="bg-[#29292E] h-[54px] text-[#C4C4CC]">
          <tr>
            <td className="border-t-[4px] border-t-[#202024] p-4">
              Conserto de débitos técnicos
            </td>
            <td className="border-t-[4px] border-t-[#202024]">25 minutos</td>
            <td className="border-t-[4px] border-t-[#202024]">
              Há cerca de 2 meses
            </td>
            <td className="border-t-[4px] border-t-[#202024]">
              <Status color="yellow" />
            </td>
          </tr>

          <tr>
            <td className="border-t-[4px] border-t-[#202024] p-4">
              Conserto de débitos técnicos
            </td>
            <td className="border-t-[4px] border-t-[#202024]">25 minutos</td>
            <td className="border-t-[4px] border-t-[#202024]">
              Há cerca de 2 meses
            </td>
            <td className="border-t-[4px] border-t-[#202024]">
              <Status color="red" />
            </td>
          </tr>

          <tr>
            <td className="border-t-[4px] border-t-[#202024] p-4">
              Conserto de débitos técnicos
            </td>
            <td className="border-t-[4px] border-t-[#202024]">25 minutos</td>
            <td className="border-t-[4px] border-t-[#202024]">
              Há cerca de 2 meses
            </td>
            <td className="border-t-[4px] border-t-[#202024]">
              <Status color="green" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
