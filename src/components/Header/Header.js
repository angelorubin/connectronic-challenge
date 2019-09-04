import React, { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  AppBar,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Grid
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  logout: {
    color: grey[50]
  }
}));

export const Header = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutter variant="regular">
          <Grid container justify="flex-start" alignItems="center">
            <Grid item>
              <IconButton
                disableFocusRipple
                disableRipple
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <Icon>menu</Icon>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <Typography>Painel</Typography>
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <IconButton color="inherit">
                <Badge
                  className={classes.margin}
                  badgeContent={4}
                  color="secondary"
                >
                  <Icon>notifications</Icon>
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <Link to="/">
                  <Icon className={classes.logout}>logout</Icon>
                </Link>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <Icon>chevron_left</Icon>
            ) : (
              <Icon>chevron_right</Icon>
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText>
              <Link to="/dashboard">Dashboard</Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon>list</Icon>
            </ListItemIcon>
            <ListItemText>
              <Link to="/list-categories">Categorias</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        {children}
      </main>
    </div>
  );
};
