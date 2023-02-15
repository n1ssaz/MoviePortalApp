import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Drawer, Input, List } from '@mui/material';
import DrawerItem from './DrawerItem';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import database from "../../db.json"
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  //backgroundColor: alpha(theme.palette.common.white, 0.15),
  //'&:hover': {
  //  backgroundColor: alpha(theme.palette.common.white, 0.5),
  //},
  backgroundColor: '#9463C7',
  border: '#66cc00',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const navigate = useNavigate()
  const [state, setState] = React.useState(false);
  return (
    <Box>
      <Box sx={{ backgroundColor: '#9463C7', flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: '#9463C7' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="New Times Roman"
              sx={{ mr: 2 }}
              onClick={() => {
                setState(true)
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography onClick={() => {
              navigate("/")
            }}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: "pointer" }}
            >
              Movie
            </Typography >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                onChange={(event, value) => navigate(`/movie/${value.id}`)}
                options={database.movies}
                getOptionLabel={option => option.title}
                placeholder="Search…"
                popupIcon={""}

                renderInput={params => {
                  const { InputLabelProps, InputProps, ...rest } = params;
                  return <StyledInputBase {...params.InputProps} {...rest} label="" variant="outlined" fullWidth />
                }}
              />
            </Search>
            <Drawer
              anchor='left'
              open={state}
              onClose={() => {
                setState(false)
              }
              }
            >

              <DrawerItem></DrawerItem>
            </Drawer>

          </Toolbar>
        </AppBar>
      </Box>
      {
        props.children
      }
    </Box>
  );
}