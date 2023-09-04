import react from "react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <div className="flex">
      <PaginationItem text="<" />
      <PaginationItem text="1" />
      <PaginationItem text="2" />
      <PaginationItem text="3" />
      <PaginationItem text=">" />
    </div>
  );
}
