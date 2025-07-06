import { useState } from "react";

export const useDialog = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpenDialog,
    handleCloseDialog
  }
}