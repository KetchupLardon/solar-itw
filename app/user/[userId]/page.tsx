"use client";
import { useParams } from "next/navigation";
import { useFetchUniqueUser } from "@/hooks/useFetchUniqueUser";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

const Page = () => {
  const { userId } = useParams();
  const { data, isLoading, error } = useFetchUniqueUser(userId as string);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <div>
        <h1>{`${data.first_name} ${data.last_name}`}</h1>
        <Image
          src={data.avatar}
          alt="User avatar"
          width={"180"}
          height={"180"}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
