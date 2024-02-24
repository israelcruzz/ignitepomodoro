interface StatusProps {
  color: "yellow" | "red" | "green";
}

const colorStatus = (color: string) => {
    if(color === "yellow"){
        return '#FBA94C'
    } else if (color === "red") {
        return '#AB222E'
    } else {
        return '#04D361'
    }
}

const Status = ({ color }: StatusProps) => {
  return (
    <span className={`flex gap-2 items-center  before:content-['ㅤ'] before:w-2 before:h-2 before:rounded-full before:bg-[${colorStatus(color)}]`}>
      Em andamento
    </span>
  );
};

export default Status;
