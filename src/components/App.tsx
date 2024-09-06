import { useEffect } from "react";
import useAppDispatch from "../assets/hooks/useAppDispatch";
import { fetchUsers } from "../redux/users/users-operations";
import UsersTable from "./UsersTable/UsersTable";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersTable />;
};

export default App;
