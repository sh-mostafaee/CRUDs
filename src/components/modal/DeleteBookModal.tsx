import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { TBook } from "@/types/book/book.type";

type DeleteModalType = {
  setOpen: React.Dispatch<TBook | null>;
  row: TBook | null;
  handleRemoveRow: (item: TBook) => void;
};

export function DeleteBookModal(props: DeleteModalType) {
  const { setOpen, row, handleRemoveRow } = props;

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <Dialog
        open={!!row}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`delete id: ${row?.id}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete {row?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>no</Button>
          <Button
            onClick={() => (row ? handleRemoveRow(row) : undefined)}
            autoFocus
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
