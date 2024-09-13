"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader,X} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  saveId: string;
}

const RemoveSave = ({ saveId }: Props) => {
  const [isRemoving, setIsRemoving] = React.useState(false);
  const router = useRouter();

  const handleRemoveSave = async () => {
    try {
        const res = await axios.delete(`/api/save/${saveId}`)

        if(res.status === 201) {
            router.refresh()
            toast("Save is removed",{
              className:"mx-[-150%] bg-blue-500 text-white"
          })
        }
    } catch (error) {
        toast("Something went wrong", {
            className:"bg-rose-500 text-white"
        })
    } finally {
        setIsRemoving(false)
    }
  }

  return (
    <Button disabled={isRemoving} variant={"destructive"} onClick={handleRemoveSave}>
      {isRemoving ? <Loader className="animate-spin" /> : <X />}
    </Button>
  );
};

export default RemoveSave;