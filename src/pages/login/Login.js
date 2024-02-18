import {Container, Paper, Stack, TextField, Typography} from "@mui/material";
import "./Login.css"
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Client from "../../requests/Client";
import {
    globalUserFirstName,
    globalUserLastName,
    setUserFirstName, setUserId,
    setUserLastName, setUserToken
} from "../../components/HeaderAppBar/HeaderAppBar";

function Login() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register")
    }
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setLogin(event.target.value)
        }

    }

    const handlePasswordInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setPassword(event.target.value)
        }
    }

    const loginUser = () => {
        if (login === "" || password === "") {
            console.log("no login or password")
            return
        }

        Client.loginUser(login, password)
            .then(value => {
                    // Accessing response headers
                    const auth = value.headers.get('authorization');
                    console.log(`token: ${auth}`)
                    setUserToken(auth)

                    return value.json()
                }
            ).then(value => {
            Client.getAllUsers()
                .then(curUserResp => {

                    return curUserResp.json()
                })
                .then(allUsers => {
                    const headers = allUsers.headers
                    console.log(`header: ${JSON.stringify(headers)}`)


                    let currUser = allUsers["data"].filter(d => {
                            return d.Email === login
                        })[0]
                    console.log(`hello, ${currUser.FirstName} ${currUser.LastName}`)
                    setUserLastName(currUser.LastName)
                    setUserFirstName(currUser.FirstName)
                    setUserId(currUser.ID)
                    navigate("/")
                })
        }).catch(
            (reason) => {
                console.log(`cant login user: ${reason}`)
            }
        )
    }

    return (
        <Container className="top-padded">
            <Paper className="top-padded" elevation={3}>
                <Stack spacing={4}>
                    <Typography variant="h3" color="text.secondary">
                        Логин
                    </Typography>

                    <TextField id="standard-basic" label="Логин" variant="standard" onKeyDown={handleLoginInput}/>

                    <TextField id="standard-basic" label="Пароль" variant="standard" onKeyDown={handlePasswordInput}/>

                    <Button variant="contained" onClick={loginUser}>Log in</Button>

                    <Button variant="contained" onClick={handleRegisterClick}>Registration</Button>

                </Stack>
            </Paper>
        </Container>

    )
}

export default Login