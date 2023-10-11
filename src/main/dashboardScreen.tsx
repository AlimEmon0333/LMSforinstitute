import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Route, useNavigate, Routes } from 'react-router-dom';
import CreateCourse from './Admin/createCourse';
import ShowInstituteProgressInLMS from './showInstituteProgressInLMS';
import WorkspacePremiumSharpIcon from '@mui/icons-material/WorkspacePremiumSharp';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StickyNote2 from '@mui/icons-material/StickyNote2';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import CourseList from './Admin/courseList';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function Dashboard(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [dashboardList, setDashboardList] = useState<any>([
        {
            name: 'Welcome to Lms',
            route: 'instituteProgress',
            icon : <WorkspacePremiumSharpIcon/>
        },
        {
            name: 'Create Course',
            route: 'createCourse',
            icon : <StickyNote2/>
        },
        {
            name: 'Course List',
            route: 'courseList',
            icon : <FormatListNumberedRtlIcon/>
        },
    ])
    const navigate = useNavigate()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {dashboardList.map((x: any, i: any) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton onClick={() => navigate(`/${x.route}`)}>
                            <ListItemIcon>
                                {x.icon ? (x.icon):('')}
                            </ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor:"#4a274f"}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Welcome to LMS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path='/' element={<ShowInstituteProgressInLMS />} />
                    <Route path='/instituteProgress' element={<ShowInstituteProgressInLMS />} />
                    <Route path='/createCourse' element={<CreateCourse />} />
                    <Route path='/courseList' element={<CourseList />} />
                </Routes>
            </Box>
        </Box>
    );
}