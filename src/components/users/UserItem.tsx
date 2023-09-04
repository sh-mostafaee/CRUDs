import { TUser } from "@/services/users/users.type";
import React, { useState } from "react";
import Link from "next/link";

export type UserItemProps = {
  user: TUser;
};

export function UserItem(props: UserItemProps) {
  const { user } = props;
  const { name, email, website, id } = user;

  return (
    <div className="rounded shadow-lg border border-green-500">
      <div className="px-6 py-4 grid">
        <div className="font-bold text-xl mb-2">
          <Link href={`/users/${id}`}>{name}</Link>
        </div>
        <a href={`mailto:${email}`} className="text-gray-700 text-base">
          {email}
        </a>
        <a
          href={`https://${website}`}
          target="_blank"
          className="text-gray-700 text-base"
        >
          {website}
        </a>
      </div>
    </div>
  );
}
