import React, { Component } from 'react';
// import Navbar from "../NavBar/Navbar";
import IntroGrid from "../Grid/IntroGrid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component {

    render() {
        return (
            <>
                {/* <Navbar></Navbar> */}
                <br></br>

                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Typography component="div" style={{ backgroundColor: '#336583', height: '65vh' }}>
                            <IntroGrid></IntroGrid>
                        </Typography>
                    </Container>
                </React.Fragment>


            </>
        )
    }

};

export default Home;
