import React, { Component } from 'react';
// import Navbar from "../NavBar/Navbar";
import CenteredGrid from "../Grid/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component {

    render() {
        return (
            <>
                {/* <Navbar></Navbar> */}
                <br></br><br></br>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Typography component="div" style={{ backgroundColor: '#336583', height: '100vh' }}> 
                                                    <CenteredGrid></CenteredGrid>
                        </Typography>
                    </Container>
                </React.Fragment>
            </>
        )
    }

};

export default Home;
