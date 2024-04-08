import { Button } from "@/components/ui/button";

import { FaBrain, FaUserFriends } from "react-icons/fa";
import { TbTicTac } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button
          size={"lg"}
          variant={"ghost"}
          className="w-full flex items-center justify-center gap-4"
        >
          <FaBrain size={24} />
          Cérebro em Ação
        </Button>
        <Button
          size={"lg"}
          variant={"ghost"}
          className="w-full flex items-center justify-center gap-4"
        >
          <TbTicTac size={24} />
          Desafios Diários
        </Button>
        <Button
          size={"lg"}
          variant={"ghost"}
          className="w-full flex items-center justify-center gap-4"
        >
          <GiProgression size={24} />
          Amplie seu Potencial
        </Button>
        <Button
          size={"lg"}
          variant={"ghost"}
          className="w-full flex items-center justify-center gap-4"
        >
          <FaUserFriends size={24} />
          Compita com Amigos
        </Button>
      </div>
    </footer>
  );
};
