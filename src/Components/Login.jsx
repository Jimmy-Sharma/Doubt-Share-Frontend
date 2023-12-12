import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Heading,
    Switch,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loginfunction } from '../redux/user/action';
import { toast } from "react-hot-toast";

const Login = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.isAuth)
    const loading = useSelector((state) => state.isLoading);
    console.log(data)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleSignUp = () => {
        setTimeout(function () {
            navigate("/register")
        }, 300);
    };

    const formBackground = useColorModeValue('gray.400');

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
        };
        console.log(loginData)
        if (!email || !password) {
            toast.error("Please enter the inputs correctly.");
        } else {
            await dispatch(Loginfunction(loginData));
            navigate('/create');
        };
    }

    useEffect(() => {
        if (data) {
            navigate('/');
        }
    }, [data, navigate]);

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" bg="gray.700">
            <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={8} boxShadow="lg">
                <Heading mb={6}>Log In</Heading>
                <Input
                    placeholder="Enter Email"
                    type="email"
                    variant="filled"
                    mb={3}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Enter Password"
                    type="password"
                    variant="filled"
                    mb={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button colorScheme="teal" mb={8} onClick={handleLogin}>
                    Log In
                </Button>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark_mode" mb="0">
                        Not an Existing User, Sign Up
                    </FormLabel>
                    <Switch size="lg" onChange={toggleSignUp} />
                </FormControl>
            </Flex>
        </Flex>
    );
};



export default Login;