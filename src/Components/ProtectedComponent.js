import React,{Component} from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedComponent = ({ component: Dummy, ...rest }) => (
   
    <Route
        {...rest}
        render={props => 
            localStorage.getItem('loggedIn') ? (
                <Dummy {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
        }  
    />
);
 
 


// class ProtectedComponent extends Component {
//     constructor(props)
//     {
//       super(props)
      
//     }
//     render() {
     
//       return ( 
//         <div>
//       {
//         localStorage.getItem('loggedIn') ? 
//       <Route exact path={this.props.path} component={this.props.component} />
//              :
//                     <Redirect
//                         to={{
//                             pathname: "/",
//                             state: { from: this.props.location }
//                         }}
//                     />
//       }
//         </div> 
  
//       );
//     }
//   }
 
  
export default ProtectedComponent;
