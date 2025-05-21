import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnología</th>
            <th scope="col">Email</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>{user.name}</td>
            <td>{user.technology}</td>
            <td>{user.email}</td>
            <td>{user.networks}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HomeScreen;
