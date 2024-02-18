import {alpha, AppBar, Container, InputBase, styled, Toolbar, Typography} from "@mui/material";
import "./HeaderAppBar.css"
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export let globalUserFirstName = "Guest"
export let globalUserLastName = ""

export let globalUserId = -1

export let globalUserToken = ""

export function setUserToken(token: string) {
    globalUserToken = token
}

export function setUserFirstName(name: string) {
    globalUserFirstName = name
}

export function setUserLastName(name: string) {
    globalUserLastName = name
}

export function setUserId(id: number) {
    globalUserId = id
}

function HeaderAppBar() {
    const navigate = useNavigate();
    return (
        <AppBar className="secondary-colored" position="static">
            <Container className="secondary-colored" maxWidth="xl">
                <Toolbar className="secondary-colored" disableGutters>
                    <div className="name-wrapper">
                        {globalUserFirstName} {globalUserLastName}
                    </div>

                    <div className="buttons-wrapper">

                        <Button color="inherit" onClick={() => navigate('/')}>
                            Tурниры
                        </Button>

                        <Button color="inherit" onClick={() => navigate('/favourites')}>
                            Избранное
                        </Button>


                        <Button color="inherit" onClick={() => navigate('/Login')}>
                            Log In
                        </Button>
                    </div>
                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default HeaderAppBar
