interface StatusProps {
  color: "yellow" | "red" | "green";
}

const statusController = {
  yellow: { text: "Em andamento" },
  red: { text: "Interrompido" },
  green: { text: "Concluido" },
};

const Status = ({ color }: StatusProps) => {
  return (
    <span className={`flex gap-2 items-center ${color}`}>
      {statusController[color].text}
    </span>
  );
};

export default Status;
