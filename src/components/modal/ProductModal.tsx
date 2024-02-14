import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export type ProductModalProps = {
  open: boolean;
  handleClose: () => void;
};

export type InputErrors = {
  cost: number;
  name: string;
  isAvailable: boolean;
  operation: boolean;
};

export function ProductModal(props: ProductModalProps) {
  const { open, handleClose } = props;
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value as string);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>add </DialogTitle>
        <DialogContent>
          <FormControl>
            <InputLabel>name</InputLabel>
            <TextField
              margin="dense"
              id="amount"
              fullWidth
              variant="standard"
              type="number"
              sx={{ mb: 2 }}
              value={name}
              onChange={handleChangeName}
              error={!!errors}
              helperText={errors}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
