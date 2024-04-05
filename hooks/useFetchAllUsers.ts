import { useState, useEffect } from "react";
import { IUser } from "@/interfaces/IUser";

export const useFetchAllUsers = (): {
  data: IUser[];
  isLoading: boolean;
  error: Error | null;
} => {
  const [data, setData] = useState<IUser[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const REQRES_BASE_URL = "https://reqres.in";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${REQRES_BASE_URL}/api/users?per_page=8`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setData(data.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
