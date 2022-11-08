import React from "react"
import { Route as RouterRoute } from "react-router-dom";

export const Route = ({children,path})=> {
    return (
        <Route 
        path = {path} 
        element ={
            <React.Suspense fallback={<div>Loading...</div>}>
             {children}
          </React.Suspense>
          }/>
    )
}