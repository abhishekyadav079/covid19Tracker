
import { Typography, Box, makeStyles, CircularProgress,Grid} from "@material-ui/core";
import Card from './Card'
const useStyles = makeStyles({

    component: {
        margin: '50px 0',
        flexDirection:'column',
        alignItems: 'center',
        display: 'flex' 
    },
container:{
    color: 'red',
    marginBotton: 40
}

})
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    const classes = useStyles();

    if(!confirmed){
        return <CircularProgress  />
    }
  return (
      <Box  className={classes.component}>
      <Typography  className = {classes.container}variant="h5" gutterBottom>Corona Virus Globally</Typography>
      <Grid container spacing={3} justify="center">
        <Card
         cardTitle="Infected"
         value={confirmed.value}
         desc="Number of Infected by Covis-19"
         lastUpdate={lastUpdate}/>
        <Card 
        cardTitle="Recovered"
        value={recovered.value}
        desc="Number of Recovered by Covis-19"
        lastUpdate={lastUpdate}/>
        <Card 
        cardTitle="Deaths"
        value={confirmed.value}
        desc="Number of Deaths by Covis-19"
        lastUpdate={lastUpdate}/>
        </Grid>
      </Box>
  )
}
export default Cards;
