import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ( { detailData, authenticate } ) => {
    return authenticate ? <ProductDetail detailData={ detailData }/> : <Navigate to="/login"/>
}

export default PrivateRoute
