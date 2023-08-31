"use client";

import { Loading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import { UserItem } from "@/components/users/UserItem";
import { useFetch } from "@/hooks/useFetch";
import { TUsers } from "@/services/users/users.type";
import React, { useEffect } from "react";

export default function UsersPage() {
  const { data, error, handleFetch, loading } = useFetch<TUsers>("users");
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? <Loading fullScreen /> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data ? data.map((item) => <UserItem user={item} />) : null}
        <Pagination />
      </div>
    </div>
  );
}
