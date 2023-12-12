import React, { useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetDoubt } from "../redux/doubt/action";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

const DoubtHistory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doubt.Doubt);
  const navigate = useNavigate()
  let userData = JSON.parse(localStorage.getItem("Revly.io"))
  console.log(userData._id)


  useEffect(() => {
    let userId = {
      "_id": userData._id
    }
    console.log(userId)
    dispatch(GetDoubt(userId));
  }, [dispatch]);

  const handleEdit = (doubtId) => {
    console.log("Edit Doubt:", doubtId);
    toast.success("Edited successfully")
  };

  const handleDelete = (doubtId) => {
    console.log("Delete Doubt:", doubtId);
    toast.success("Deleted successfully")
  };

  const handleLogOut = () => {
    toast.success("Logged out successfully")
    localStorage.removeItem('Revly.io');
    navigate("/");
    
  }

  return (
    <>
      <Box bg="gray.700" color="white" fontWeight="bold" fontSize="26px">
        <Text fontSize="26px" mb={4}>
          Doubt History
        </Text>
        <Table variant='striped' colorScheme='teal'>
          <Thead color="white" fontWeight="bold" fontSize="26px">
            <Tr>
              <Th color="white" fontWeight="bold" fontSize="26px">Sl No.</Th>
              <Th color="white" fontWeight="bold" fontSize="26px">Subject</Th>
              <Th color="white" fontWeight="bold" fontSize="26px">Details</Th>
              <Th color="white" fontWeight="bold" fontSize="26px">Actions</Th>
            </Tr>
          </Thead>
          <Tbody color={"black"}>
            {data &&
              data.map((el, i) => (
                <Tr key={el._id}>
                  <Td>{i + 1}</Td>
                  <Td>{el.subject}</Td>
                  <Td>{el.details}</Td>
                  <Td>
                    {/* Edit Button */}
                    <Flex gap={10}>
                      <Button colorScheme="teal" mr={2} onClick={() => handleEdit(el._id)}>
                        Edit
                      </Button>
                      {/* Delete Button */}
                      <Button colorScheme="red" onClick={() => handleDelete(el._id)}>
                        Delete
                      </Button>
                    </Flex>

                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        <Button colorScheme="red" onClick={handleLogOut}>
          LogOut
        </Button>
      </Box>
    </>
  );
};

export default DoubtHistory;