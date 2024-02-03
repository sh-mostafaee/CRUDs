"use client";

import { PlusButton } from "@/components/PlusButton";
import { ModifyBookModal } from "@/components/modal/ModifyBookModal";
import { Table } from "@/components/table/Table";
import { darkTheme } from "@/styles/theme";
import { PublishStatus, TBook, TBooks } from "@/types/book/book.type";
import {
  Box,
  Chip,
  ChipTypeMap,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteBookModal } from "@/components/modal/DeleteBookModal";

type PublishStatusColors = {
  [key in PublishStatus]: ChipTypeMap["props"]["color"];
};

function getUserName(firstName: string, lastName: string, formal?: boolean) {
  if (formal) {
    return `${firstName} ${lastName}`;
  } else return firstName;
}

type User = { firstName: string; lastName: string };
const a = getUserName("shiva", "mostafaee", true);
getUserName("shiva", "mostafaee", false);

function getUserConditionalName(user: User, formal?: boolean) {
  const key = formal ? "lastName" : "firstName";
  return user[key];
}

getUserConditionalName(
  {
    firstName: "shiva",
    lastName: "mostafaee",
  },
  false
);

const initialRows: TBooks = [
  {
    id: 1,
    name: "Snow",
    author: "Jon",
    pages: 35,
    edition: 2,
    publishStatus: PublishStatus.baned,
    isAvailable: true,
    diff: 1200,
    amount: 1200000.45,
  },
  {
    id: 2,
    name: "Lannister",
    author: "Cersei",
    pages: 42,
    edition: 4,
    publishStatus: PublishStatus.published,
    isAvailable: true,
    diff: -900,
    amount: 563 / 123,
  },
  {
    id: 3,
    name: "Lannister",
    author: "Jaime",
    pages: 45,
    edition: 6,
    publishStatus: PublishStatus.readyPublish,
    isAvailable: false,
    diff: -800,
    amount: 3333332,
  },
  {
    id: 4,
    name: "Stark",
    author: "Arya",
    pages: 16,
    edition: 4,
    publishStatus: PublishStatus.writing,
    isAvailable: true,
    diff: 330,
    amount: 29845,
  },
  {
    id: 5,
    name: "Targaryen",
    author: "Daenerys",
    pages: 200,
    edition: 8,
    publishStatus: PublishStatus.readyPublish,
    isAvailable: false,
    diff: -400,
    amount: 98214,
  },
  {
    id: 6,
    name: "Melisandre",
    author: "mamad",
    pages: 150,
    edition: 10,
    publishStatus: PublishStatus.baned,
    isAvailable: true,
    diff: -11500,
    amount: 8104,
  },
  {
    id: 7,
    name: "Clifford",
    author: "Ferrara",
    pages: 44,
    edition: 20,
    publishStatus: PublishStatus.published,
    isAvailable: true,
    diff: 800,
    amount: 56321,
  },
  {
    id: 8,
    name: "Frances",
    author: "Rossini",
    pages: 36,
    edition: 14,
    publishStatus: PublishStatus.published,
    isAvailable: false,
    diff: 550,
    amount: 39134,
  },
  {
    id: 9,
    name: "Roxie",
    author: "Harvey",
    pages: 65,
    edition: 16,
    publishStatus: PublishStatus.writing,
    isAvailable: false,
    diff: -22300,
    amount: 7584320,
  },
];

export default function BooksPage() {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState<TBook | null>(null);
  const [deleteOpen, setDeleteOpen] = React.useState<TBook | null>(null);

  const [rows, setRows] = useState(initialRows);

  const columns: GridColDef<TBook>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 120,
      editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      width: 120,
      editable: true,
    },
    {
      field: "pages",
      headerName: "Page",
      // type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "edition",
      headerName: "Edition",
      width: 120,
    },
    {
      field: "publishStatus",
      headerName: "PublishStatus",
      width: 200,
      renderCell: (params) => {
        const status = params.row.publishStatus;
        const colors: PublishStatusColors = {
          [PublishStatus.baned]: "warning",
          [PublishStatus.published]: "success",
          [PublishStatus.readyPublish]: "secondary",
          [PublishStatus.writing]: "info",
        };

        return <Chip label={status.toUpperCase()} color={colors[status]} />;
      },
    },
    {
      field: "isAvailable",
      headerName: "Available",
      width: 200,
      renderCell: (params) =>
        params.row.isAvailable ? <CheckIcon /> : <CloseIcon />,
    },
    {
      field: "isDiff",
      headerName: "Diff",
      width: 100,
      renderCell: (params) => (
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          height="100%"
          width="100%"
          bgcolor={params.row.diff > 0 ? "green" : "red"}
          px={1}
        >
          {`$${Math.abs(params.row.diff)}`}
        </Box>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 200,
      renderCell: (params) => `$${params.row.amount.toLocaleString()}`,
    },
    {
      field: "",
      headerName: "Operation",
      width: 200,
      renderCell: (params) => (
        <div>
          <IconButton color="error" onClick={() => setDeleteOpen(params.row)}>
            <DeleteIcon />
          </IconButton>
          <IconButton color="success" onClick={() => setEditOpen(params.row)}>
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleAddRow = (newRow: TBook) => {
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (item: TBook) => {
    setRows(rows.filter((row) => row.id !== item.id));
    setDeleteOpen(null);
  };

  const handleEditRow = (item: TBook) => {
    setRows(
      rows.map((row) => {
        if (row.id === item.id) {
          return item;
        } else {
          return row;
        }
      })
    );
    handleCloseModify();
  };

  const handleCloseModify = () => {
    setCreateOpen(false);
    setEditOpen(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="flex items-between justify-between mt-2">
        <p>Books</p>
        <PlusButton onClick={() => setCreateOpen(true)} />
      </div>
      <div className="mt-2">
        <Table
          rows={rows}
          columns={columns}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       pageSize: 20,
          //     },
          //   },
          // }}
          pageSizeOptions={[20]}
          disableRowSelectionOnClick
        />
      </div>
      <ModifyBookModal
        open={createOpen || !!editOpen}
        handleClose={handleCloseModify}
        handleAddRow={handleAddRow}
        row={editOpen}
        handleEditRow={handleEditRow}
      />
      <DeleteBookModal
        setOpen={setDeleteOpen}
        row={deleteOpen}
        handleRemoveRow={handleRemoveRow}
      />
    </ThemeProvider>
  );
}
