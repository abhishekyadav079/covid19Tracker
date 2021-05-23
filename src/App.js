import {Component} from 'react';
import Cards from './components/Cards';
import covid from './images/covid.jpg'
import {Box,Typography,withStyles} from '@material-ui/core'
import { findByLabelText } from '@testing-library/dom';
import { fetchData } from './services/api';
import Countries from './components/Countries';
import Chart from './components/Chart'
const style={
container :{
 
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column'
},
header:{
  background: '#F5F5F5',
  width: 400,
  textAlign: 'center',
  fontSize: 20,
  padding: 10,
  color: '#777'
},
lastUpdated:{
   color: '#777',
fontSize: 12
}
}
class App extends Component{
  state={
    data:{}, 
    country:''
  }
async componentDidMount(){
 
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData();
    this.setState({data:fetchedData,country:country})
  }

  
render(){
  const{data}=this.state;
  return(
    <Box className={this.props.classes.container}>
<Box className= {this.props.classes.header}>COVID -19 Tracker</Box>
<Typography className={this.props.classes.lastUpdated}>Last Updates:{data.lastUpdate && new Date (data.lastUpdate).toDateString()}</Typography>
<Cards data={data}/>
<Countries handleCountryChange={this.handleCountryChange}/>
<Chart data={data} />
</Box>


  )
}

}
export default withStyles(style)(App);