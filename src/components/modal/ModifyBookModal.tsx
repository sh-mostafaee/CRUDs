import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { PublishStatus, TBook } from "@/types/book/book.type";

export type ModifyBookModalProps = {
  open: boolean;
  handleAddRow: (row: TBook) => void;
  handleEditRow: (row: TBook) => void;
  handleClose: () => void;
  row: TBook | null;
};

export type InputErrors = {
  available: string;
  publishStatus: string;
  diff: string;
  author: string;
  pages: string;
  edition: string;
  amount: string;
  name: string;
};

export function ModifyBookModal(props: ModifyBookModalProps) {
  const { open, handleClose, handleAddRow, row, handleEditRow } = props;

  const [available, setAvailable] = useState("");
  const [publishStatus, setPublishStatus] = useState<PublishStatus>();
  const [diff, setDiff] = useState(row?.diff.toString());
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [edition, setEdition] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState(row?.name);

  const [nameError, setNameError] = useState("");
  const [errors, setErrors] = useState<InputErrors>({
    available: "",
    publishStatus: "",
    diff: "",
    author: "",
    pages: "",
    edition: "",
    amount: "",
    name: "",
  });

  useEffect(() => {
    if (row) {
      setName(row.name);
      setDiff(row.diff.toString());
      setAvailable(row.isAvailable ? "yes" : "no");
      setPublishStatus(row.publishStatus);
      setAuthor(row.author);
      setPages(row.pages.toString());
      setEdition(row.edition.toString());
      setAmount(row.amount.toString());
    }
  }, [row]);

  const handleChangeAvailable = (event: SelectChangeEvent) => {
    setAvailable(event.target.value as string);
  };

  const handleChangePublishStatus = (event: SelectChangeEvent) => {
    setPublishStatus(event.target.value as PublishStatus);
  };
  const handleChangeDiff = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiff(event.target.value as string);
  };
  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value as string);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value as string);
  };
  const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value as string);
  };
  const handleChangePages = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPages(event.target.value as string);
  };
  const handleChangeEdition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEdition(event.target.value as string);
  };

  const handleSubmit = () => {
    console.log({
      available,
      publishStatus,
      diff,
      amount,
      edition,
      pages,
      author,
      name,
    });

    const values = {
      available,
      publishStatus,
      diff,
      amount,
      edition,
      pages,
      author,
      name,
    };

    console.log(Object.entries(values), "hamed eshghe mane");

    const newErrors: InputErrors = Object.entries(values).reduce(
      (total, item) => {
        const [key, value] = item as [keyof InputErrors, string];
        if (!value) {
          total[key] = "required";
        }
        return total;
      },
      {
        available: "",
        publishStatus: "",
        diff: "",
        amount: "",
        edition: "",
        pages: "",
        author: "",
        name: "",
      }
    );

    console.log(newErrors, "newErrors");
    setErrors(newErrors);

    if (
      available &&
      publishStatus &&
      diff &&
      amount &&
      edition &&
      pages &&
      author &&
      name
    ) {
      const newRow: TBook = {
        id: row ? row.id : new Date().getTime(),
        isAvailable: available === "yes",
        publishStatus,
        diff: Number(diff),
        amount: Number(amount),
        edition: Number(edition),
        pages: Number(pages),
        author,
        name,
      };
      if (row) {
        handleEditRow(newRow);
      } else {
        handleAddRow(newRow);
      }
    }
  };

  const handleCancel = () => {
    setAmount("");
    setName("");
    setDiff("");
    setAvailable("");
    setPublishStatus(undefined);
    setAuthor("");
    setPages("");
    setEdition("");
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {row ? `Edit Book id:${row.id}` : "Create New Book"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            sx={{ mb: 2 }}
            value={name}
            onChange={handleChangeName}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            fullWidth
            variant="standard"
            sx={{ mb: 2 }}
            value={author}
            onChange={handleChangeAuthor}
            error={!!errors.author}
            helperText={errors.author}
          />
          <TextField
            margin="dense"
            id="pages"
            label="Pages"
            fullWidth
            variant="standard"
            type="number"
            sx={{ mb: 2 }}
            value={pages}
            onChange={handleChangePages}
            error={!!errors.pages}
            helperText={errors.pages}
          />
          <TextField
            margin="dense"
            id="edition"
            label="Edition"
            fullWidth
            variant="standard"
            type="number"
            sx={{ mb: 2 }}
            value={edition}
            onChange={handleChangeEdition}
            error={!!errors.edition}
            helperText={errors.edition}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Publish Status
            </InputLabel>
            <Select
              labelId="publishStatus"
              id="publishStatus-select"
              label="Publish Status"
              onChange={handleChangePublishStatus}
              variant="standard"
              sx={{ mb: 2 }}
              error={!!errors.publishStatus}
              value={publishStatus}
            >
              <MenuItem value={PublishStatus.baned}>
                {PublishStatus.baned}
              </MenuItem>
              <MenuItem value={PublishStatus.published}>
                {PublishStatus.published}
              </MenuItem>
              <MenuItem value={PublishStatus.readyPublish}>
                {PublishStatus.readyPublish}
              </MenuItem>
              <MenuItem value={PublishStatus.writing}>
                {PublishStatus.writing}
              </MenuItem>
            </Select>
            {errors.publishStatus ? (
              <FormHelperText error>{errors.publishStatus}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="available">Available</InputLabel>
            <Select
              labelId="available"
              id="available-select"
              label="Available"
              onChange={handleChangeAvailable}
              variant="standard"
              sx={{ mb: 2 }}
              value={available}
            >
              <MenuItem value="yes">yes</MenuItem>
              <MenuItem value="no">no</MenuItem>
            </Select>
          </FormControl>
          {errors.available ? (
            <FormHelperText error>{errors.available}</FormHelperText>
          ) : null}

          <InputLabel id="available">Diff</InputLabel>
          <TextField
            margin="dense"
            id="diff"
            fullWidth
            variant="standard"
            type="number"
            sx={{ mb: 2 }}
            value={diff}
            onChange={handleChangeDiff}
            error={!!errors.diff}
            helperText={errors.diff}
          />
          <InputLabel id="available">Amount</InputLabel>
          <TextField
            margin="dense"
            id="amount"
            fullWidth
            variant="standard"
            type="number"
            sx={{ mb: 2 }}
            value={amount}
            onChange={handleChangeAmount}
            error={!!errors.amount}
            helperText={errors.amount}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="success">
            {row ? "Edit" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
