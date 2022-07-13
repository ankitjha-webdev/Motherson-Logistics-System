import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GroupMaster from './GroupMaster';
import { styled } from '@mui/material/styles';
import CompanyMaster from './CompanyMaster';
import UnitMaster from './UnitMaster';
import GSTMaster from './GSTMaster';
import Type from './Type';
import ContactMaster from './ContactMaster';
import InvolvedPartyQuailifierMaster from './InvolvedPartyQuailifierMaster ';
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

export default function Party() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <SideBar>
            <Box sx={{ width: '100%', marginLeft: '5rem', marginTop: '20px' }} className="">
                <Box sx={{ borderBottom: 1, borderColor: '#ef5350', }}>
                    <div className=' mx-auto'>
                        <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <AntTab label="Group Master" {...a11yProps(1)} />
                            <AntTab label="Company Master" {...a11yProps(0)} />
                            <AntTab label="Unit Master" {...a11yProps(2)} />
                            <AntTab label="GST Master" {...a11yProps(3)} />
                            <AntTab label="Type" {...a11yProps(4)} />
                            <AntTab label="Contact Master" {...a11yProps(5)} />
                            <AntTab label="Involved Party Quailifier Master " {...a11yProps(6)} />
                        </AntTabs>
                    </div>
                </Box>
                <TabPanel value={value} index={0}>
                    <GroupMaster />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CompanyMaster />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <UnitMaster />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <GSTMaster />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Type />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ContactMaster />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <InvolvedPartyQuailifierMaster />
                </TabPanel>

            </Box>
        </SideBar>
    );
}
