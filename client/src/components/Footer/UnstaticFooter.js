import React from 'react';

import { useStyles } from '../styles/Styles';

/**
 * Material-UI imports
 */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CopyrightIcon from '@material-ui/icons/Copyright';

const UnstaticFooter = () => {

    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" className={classes.unstaticFooter}>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CopyrightIcon color="primary" />
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <Link href="https://github.com/ZnK88/" target="_blank">
                    <Typography variant="body1" color="primary" className={classes.text}>
                        Michael Thouvenin
                    </Typography>
                </Link>
                <Link href="https://github.com/VictoriaLhb" target="_blank">
                    <Typography variant="body1" color="primary" className={classes.text}>
                        Victoria Le Houëdec - Belin
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
}

export default UnstaticFooter;