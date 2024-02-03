"use client";

import { PlusButton } from "@/components/PlusButton";
import { ModifyBookModal } from "@/components/modal/ModifyBookModal";
import { ProductModal } from "@/components/modal/ProductModal";
import { Table } from "@/components/table/Table";
import { darkTheme } from "@/styles/theme";
import { TProduct, TProducts } from "@/types/product/product.type";
import {
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const initialProducts = [
  {
    name: "apple 12",
    id: 1,
    cost: 2000,
    isAvailable: true,
  },
  {
    name: "samsung note",
    id: 2,
    cost: 1000,
    isAvailable: false,
  },
  {
    name: "xiaomi a10",
    id: 3,
    cost: 4000,
    isAvailable: true,
  },
];

export default function Product() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [deleteOPen, setDeleteOpen] = React.useState<TProduct | null>(null);
  const [editOPen, setEditOpen] = React.useState<TProduct | null>(null);

  const columns: GridColDef<TProduct>[] = [
    { field: "id", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 400,
    },

    {
      field: "cost",
      headerName: "cost",
      width: 400,
    },
    {
      field: "isAvailable",
      headerName: "isAvailable",
      width: 400,
      renderCell: (params) =>
        params.row.isAvailable ? <CheckIcon /> : <CloseIcon />,
    },
    {
      field: "",
      headerName: "Operations",
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <PlusButton onClick={handleOpen} />
        <Table
          rows={initialProducts}
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

        <ProductModal handleClose={handleClose} open={open} />
      </div>
    </ThemeProvider>
  );
}
