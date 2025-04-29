import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // <-- important
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkIcon from '@mui/icons-material/Work';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const Navbar = () => {
  const navItems = [
    { icon: <HomeIcon fontSize="small" />, text: 'Home', link: '/home' },
    { icon: <GroupIcon fontSize="small" />, text: 'All Leads', link: '/leads' },
    { icon: <ContactsIcon fontSize="small" />, text: 'My Leads', link: '/my-leads' },
    { icon: <SignalCellularAltIcon fontSize="small" />, text: 'All Opportunities', link: '/opportunities' },
    { icon: <WorkIcon fontSize="small" />, text: 'My Opportunities', link: '/my-opportunities' },
    { icon: <PeopleIcon fontSize="small" />, text: 'All Customer', link: '/customers' },
    { icon: <LocationOnIcon fontSize="small" />, text: 'All Destinations', link: '/all destinations' },
    { icon: <LabelIcon fontSize="small" />, text: 'All Tags', link: '/tags' },
    { icon: <ArchiveIcon fontSize="small" />, text: 'Archived Data', link: '/archive' },
    { icon: <PeopleIcon fontSize="small" />, text: 'All Teams', link: '/teams' },
    { icon: <ReportIcon fontSize="small" />, text: 'Report', link: '/report' },
    { icon: <LocalShippingIcon fontSize="small" />, text: 'Suppliers', link: '/suppliers' },
  ];

  return (
 <Box>

    <Box
      sx={{
        width: 180,
        backgroundColor: '#a7ffeb',
        height: '100vh',
        pt: 2,
        px: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{ minHeight: 40, px: 1.5 }}
            >
              <ListItemIcon sx={{ color: '#212121', minWidth: 32 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: '13px', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );
};

export default Navbar;
