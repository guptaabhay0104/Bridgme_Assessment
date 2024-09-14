import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const Sidebar = () => {
  return (
    <div style={styles.sidebarContainer}>
      <div style={styles.logoContainer}>
        <img src="/path/to/logo.png" alt="Company Logo" style={styles.logo} />
      </div>
      <Divider style={styles.divider} />
      <List style={styles.list}>
        <ListItem button component={Link} to="/" style={styles.listItem}>
          <ListItemIcon style={styles.icon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={styles.text} />
        </ListItem>
        <ListItem button component={Link} to="/employee-management" style={styles.listItem}>
          <ListItemIcon style={styles.icon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employee Management" style={styles.text} />
        </ListItem>
        <ListItem button component={Link} to="/payroll-management" style={styles.listItem}>
          <ListItemIcon style={styles.icon}>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll Management" style={styles.text} />
        </ListItem>
        <ListItem button component={Link} to="/recruitment-management" style={styles.listItem}>
          <ListItemIcon style={styles.icon}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Recruitment" style={styles.text} />
        </ListItem>
        <ListItem button component={Link} to="/employee-performance" style={styles.listItem}>
          <ListItemIcon style={styles.icon}>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Employee Performance" style={styles.text} />
        </ListItem>
      </List>
    </div>
  );
};


const styles = {
  sidebarContainer: {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    height: '100vh',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
  },
  logoContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  logo: {
    maxWidth: '60%',
    height: 'auto',
  },
  divider: {
    backgroundColor: '#34495e',
    marginBottom: '10px',
  },
  list: {
    paddingTop: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '15px 20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    color: '#ecf0f1',
    minWidth: '40px',
  },
  text: {
    color: '#ecf0f1',
    fontWeight: 500,
  },
  listItemHover: {
    backgroundColor: '#34495e',
  },
};

export default Sidebar;
