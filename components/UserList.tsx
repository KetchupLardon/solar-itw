"use client";

import { useFetchAllUsers } from "@/hooks/useFetchAllUsers";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const { data, isLoading, error } = useFetchAllUsers();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>An error occured</p>;
  }
  return (
    <div>
      {data?.length &&
        data.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
    </div>
  );
};
