import { CardContent, Typography,Box,Grid,Card,makeStyles } from "@material-ui/core"
import CountUp from 'react-countup';

const useStyle=makeStyles({

  header:{
    padding:10

  }
  }
)
const CardComponent = ({cardTitle,value,desc,lastUpdate}) =>{
  const classes=useStyle();
    return(
  <Grid component={Card} style={{margin:20, borderBottom:'20px solid orange'}}>
    <CardContent>
    <Box className={classes.header}>
    <Typography variant="h6" >{cardTitle}</Typography>
    <Typography variant="h6">
    <CountUp start={0} end={value} duration={3} seperator="," />
    <Typography color="textSecondary">{desc}</Typography>
    
    
    </Typography>
    </Box>
    </CardContent>

  </Grid>

    );
}

export default CardComponent; 