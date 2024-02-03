import React from "react";

import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export type TableProps = DataGridProps;

export function Table(props: TableProps) {
  return <DataGrid {...props} />;
}
