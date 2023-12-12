import React, { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Button,
    Flex,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { PostDoubt } from "../redux/doubt/action";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

const Doubt = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.doubt)
    const [doubts, setDoubts] = useState('');
    const [doubtType, setDoubtType] = useState('');

    let userData = JSON.parse(localStorage.getItem("Revly.io"))
    console.log(userData._id)


    const formBackground = useColorModeValue('gray.400');

    const handleSubmit = (e) => {
        const raiseDoubt = {
            student: userData._id,
            subject: doubtType,
            details: doubts,
            token: userData.token
        }
        e.preventDefault();
        console.log("Form Data:", raiseDoubt);
        dispatch(PostDoubt(raiseDoubt));
        setTimeout(() => {
            navigate('/create');
        }, 2000);

    };

    const handleHistory=()=>{
        navigate("/history")
    }

    return (
        <>
            <Flex h="100vh" alignItems="center" justifyContent="center" bg="gray.700">
                <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={8} boxShadow="lg">
                    <Heading mb={6}>Create New Doubt</Heading>
                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
                            Subject
                        </FormLabel>
                        <Select icon={<MdArrowDropDown />} variant="filled" placeholder="Please select the type of doubt" value={doubtType}
                            onChange={(e) => setDoubtType(e.target.value)}>
                            <option value="Technical">Technical</option>
                            <option value="Non-Technical">Non-Technical</option>
                        </Select>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel fontWeight="bold" fontSize="lg" color="gray.700">
                            Doubt in Details
                        </FormLabel>
                        <Textarea
                            name="details"
                            bg='white'
                            value={doubts}
                            onChange={(e) => setDoubts(e.target.value)}
                            placeholder="Enter details"
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="teal" mt={4} w="100%" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button type="submit" bg="gray.700" colorScheme="teal" mt={4} w="100%" onClick={handleHistory}>
                        History
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default Doubt;