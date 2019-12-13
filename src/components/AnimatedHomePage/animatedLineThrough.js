import React from 'react';
import { useSpring, animated } from 'react-spring'
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = createStyles({
    hr: {
        position: "fixed",
        borderColor: "red",
        bordeWidth: "1px"
    }
})

function AnimatedLineThrough() {
    //const classes = useStyles();
    const lineThrough = useSpring({
        from: { left: '0%', width: "0%" },
        to: {
            borderStyle: "solid",
            width: '300px',
            position: "z-Index",
            borderColor: "red",
            borderWidth: "1px"
        },
        config: { duration: 3000}
    })
    return (
        <div>
            bullshit<animated.div style={lineThrough}></animated.div>
        </div>
        
    )
}

export default AnimatedLineThrough
