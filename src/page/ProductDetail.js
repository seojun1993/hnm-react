import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = ( ) => {
  let { id } = useParams();
  const product = useSelector(state => state.product.selectedItem)
  const dispatch = useDispatch();
  
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.choice === true ? 'Conscious Choice' : ''} </div>
          <div>{product?.title}</div>
          <div>${product?.price}</div>
          <div>{product?.new === true ? 'New' : ''}</div>

          <div>
            <select name="" id="">
              <option value="">사이즈 선택</option>
              {product?.size.map((size, idx) => {
                return (
                  <option key={idx} value={size}>
                    {size}
                  </option>
                )
              })}
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
