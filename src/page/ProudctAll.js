import React from 'react'
import { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProudctAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/seojun1993/hnm-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  }

  useEffect(() => {
    getProduct()
  }, [query])
  
  return (
    <div>
      <Container>
        <Row>
          {productList.map(menu => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProudctAll
