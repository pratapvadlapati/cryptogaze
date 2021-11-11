const styles = theme => ({
    root: {
        border: 0,
        //borderRadius: 3,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: '100%vh',

    },
    Navbar: {
        width: '20%',
        background: '#03084d',
        float: 'left',
        color: 'white',
        minHeight: '600px'
    },
    main: {
        width: '80%',
        background: '#f2f4f7',
        height: '100%vh',
        float: 'right',
        minHeight: '600px'
    },

    footer: {
        border: '2px',
        background: '#aebcd1',

    },
    gcontainer: {
        border: '2px',
        padding: '24px',
        margin: 0,
        width: '100%'
    },
    gitem: {
        borderRadius: 3,
        margin: '2px',
    },
    ftext: {
        textAlign: 'center'
    },
    logo: {
        height: '40px',
        float: 'left',
        padding: '4px'
    },
    mtext: {
        padding: '6px',
        border: '3px',
        color: 'white'
    },
    logotext: {
        color: 'red',
        paddingTop: '4px',


    },
    logoContainer: {
        margin: '10px',
    }

});

export default styles;