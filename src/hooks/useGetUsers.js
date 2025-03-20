import { useEffect, useState } from "react";
import axios from "axios";

function useGetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return {users,loading};
}
export default useGetUsers;
