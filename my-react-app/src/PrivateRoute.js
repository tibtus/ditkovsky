// import React from "react";
// import { useSelector } from "react-redux";
// import {Route, Redirect} from "react-router-dom";
//
// function PrivateRoute({component: Component, ...rest}) {
//     const session = useSelector(state => state.auth.session);
//
//     const isAuth = () => {
//         return !!(session && session !== 'undefined' && session.token && session.token.length === 32);
//     };
//
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 isAuth() ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect to={window.location.pathname}/>
//                 )
//             }
//         />
//     );
// }
//
// export default PrivateRoute;