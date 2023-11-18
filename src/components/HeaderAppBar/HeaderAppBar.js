import {alpha, AppBar, Container, InputBase, styled, Toolbar, Typography} from "@mui/material";
import "./HeaderAppBar.css"
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

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

function HeaderAppBar() {
    const navigate = useNavigate();
    return (
        <AppBar className="secondary-colored" position="static">
            <Container className="secondary-colored" maxWidth="xl">
                <Toolbar className="secondary-colored" disableGutters>
                    <div className="name-wrapper">
                        Имя
                    </div>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <div className="buttons-wrapper">
                        <button className="button"  onClick={() => navigate('/')}>
                            Обо мне
                        </button>

                        <button className="button" onClick={() => navigate('/developer')}>
                            Разработка
                        </button>

                        <button className="button" onClick={() => navigate('/photographer')}>
                            Фотография
                        </button>

                        <button className="button" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    </div>
                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default HeaderAppBar