import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LocationMaster from './LocationMaster';
import CountoryMaster from './CountoryMaster';
import CountoryZoneMaster from './CountoryZoneMaster';
import RegionMaster from './RegionMaster';
import Provience from './ProvienceMaster';
import SPLCMaster from './SPLCMaster';
import LaneMaster from './LaneMaster';
import TimeMaster from './TimeMaster';
import AddressMaster from './AddressMaster';
import CalenderMaster from './CalenderMaster';
import SideBar from '../Sidebar/SideBar';



const AntTabs = styled(Tabs)({
    borderBottom: '10px solid #f44336',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '100%',
    margin: 'auto',
    padding: '.5rem .5rem',
    height: '100%',
    boxShadow: '0px 5px 10px #ef5350',
    '& .MuiTabs-indicator': {
        backgroundColor: '#f44336',
        //   height: '30px',
        //   width: '30px',
        borderRadius: '.5rem',
        marginTop: '10px',
        marginBottom: '10px',
        //   zIndex: '-5',
        border: 'none'

    },
});


const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,

    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    marginRight: theme.spacing(2),
    color: '#424242',
    fontWeight: '600',

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: ' #e53935',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#e53935',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#f44336',
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Geography() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <SideBar>
            <Box sx={{ width: '100%', marginLeft: '5rem', marginTop: '20px' }} className=" ">
                <Box sx={{ borderBottom: 1, borderColor: '#ef5350', }}>
                    <div className=' mx-auto'>
                        <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <AntTab label="Location" {...a11yProps(1)} />
                            <AntTab label="Country" {...a11yProps(0)} />
                            <AntTab label="Country Zone" {...a11yProps(2)} />
                            <AntTab label="Region" {...a11yProps(3)} />
                            <AntTab label="State/Province" {...a11yProps(4)} />
                            <AntTab label="SPLC" {...a11yProps(5)} />
                            <AntTab label="Lane" {...a11yProps(6)} />
                            <AntTab label="Time" {...a11yProps(6)} />
                            <AntTab label="Address" {...a11yProps(6)} />
                            <AntTab label="Calender " {...a11yProps(6)} />
                        </AntTabs>
                    </div>
                </Box>
                <TabPanel value={value} index={0}>
                    <LocationMaster />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CountoryMaster />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CountoryZoneMaster />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <RegionMaster />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Provience />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <SPLCMaster />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <LaneMaster />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <TimeMaster />
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <AddressMaster />
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <CalenderMaster />
                </TabPanel>

            </Box>
        </SideBar>
    );
}
