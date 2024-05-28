import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = ( ) => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/seojun1993/hnm-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
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
