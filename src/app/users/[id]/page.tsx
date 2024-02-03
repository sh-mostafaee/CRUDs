"use client";

import { Loading } from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import { TUser } from "@/services/users/users.type";
import React, { useEffect } from "react";

export type singleUserProps = {
  params: {
    id: string;
  };
};

export default function SingleUser(props: singleUserProps) {
  const { params } = props;
  const { id } = params;

  const { loading, data, error, handleFetch } = useFetch<TUser>(`users/${id}`);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      {loading ? <Loading fullScreen /> : null}
      <div className="padding flex items-center justify-center shadow-white rounded-3xl p-10 shadow ">
        {data ? (
          <div>
            hello user:{id}
            <p>{data.name}</p>
            <p>{`${data.address.city}, ${data.address.street},${data.address.suite}`}</p>
            <p>{data.company.name}</p>
            <p>{data.id}</p>
            <p>{data.phone}</p>
            <p>{data.username}</p>
            <p>{data.website}</p>
            <p>{data.email}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
