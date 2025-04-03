import React, { useEffect, useState } from "react";
import axiosInstance, { setAuthToken } from "../api/AxiosConfig";
import { useOktaAuth } from "@okta/okta-react";

// MUI components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      const token = authState.accessToken?.accessToken;
      setAuthToken(token);
      fetchUsers();
    }
  }, [authState]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/user/getUsers");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <h2 style={{ padding: "16px" }}>User List</h2>
      {loading ? (
        <p style={{ padding: "16px" }}>Loading users...</p>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              {/* Add more columns if needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{user.userId}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserTable;