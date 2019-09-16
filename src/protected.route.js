import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {


    const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
    return (
        <Route 
            {...rest}
            render = { props => {
                if(isAuthenticated){
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{
                                pathname: "/",
                                from: props.location
                            }}
                        />
                    )
                }
            }}
        />
    )
}