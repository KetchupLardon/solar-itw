import { IUser } from "@/interfaces/IUser";
import Link from "next/link";
import Image from "next/image";

export const UserCard = ({ user }: { user: IUser }) => {
  return (
    <Link href={`user/${user.id}`}>
      <div>
        <Image
          src={user.avatar}
          alt="User avatar"
          width={"180"}
          height={"180"}
        />
        <p>{`${user.first_name} ${user.last_name}`}</p>
      </div>
    </Link>
  );
};
