import React from 'react';
import { Container, Image, Form, Row, Col, Pagination } from 'react-bootstrap';
import KikerooSearchFilter from '../../../Components/SearchFilter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const KikerooSearchResults = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='search-resultPage commonbody-topPadding'>
      <Container>
        <section className='search-mainwrapper'>
          <h1 className='widget-title text-center'>Search </h1>
          <KikerooSearchFilter />
        </section>
        <section className='searchpage-Filters d-flex'>
          <Form.Group controlId='searchCheckbox1'>
            <Form.Check type='checkbox' label='Price' />
          </Form.Group>
          <Form.Group controlId='searchCheckbox2'>
            <Form.Check type='checkbox' label='Distance' />
          </Form.Group>
          <Form.Group controlId='searchCheckbox3'>
            <Form.Check type='checkbox' label='Rate' />
          </Form.Group>
          <Form.Group controlId='searchCheckbox4'>
            <Form.Check type='checkbox' label='Near me' />
          </Form.Group>
        </section>
        <section className='booking-sec'>
          <Row className='flex-row-reverse'>
            <Col lg='6'>
              <div className='mb-5'>
                <Image src='assets/images/vertical-map.jpg' />
              </div>
            </Col>
            <Col lg='6'>
              <div className='booking-mainRow'>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={farHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='booking-single'>
                  <Row className='m-0'>
                    <Col sm='5' className='p-0'>
                      <Slider {...settings} className='image-slider'>
                        <div>
                          <Image src='assets/images/slide-img1.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img2.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img3.jpg' />
                        </div>
                        <div>
                          <Image src='assets/images/slide-img4.jpg' />
                        </div>
                      </Slider>
                    </Col>
                    <Col sm='7' className='p-0'>
                      <div className='content-box font-12'>
                        <div className='flex-parent-between mb-3'>
                          <div className=' cursor-pointer'>Hotel Room</div>
                          <div className='add-to-wishlist font-16 cursor-pointer'>
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h3 className='widget-title font-20 mb-1'>
                          <Link to='#'>
                            Generator Mitte - Bed in 4-bed Dorm
                          </Link>
                        </h3>
                        <div className='quick-summaryBox mb-4'>
                          1 bed, Wi-Fi, washing machine
                        </div>
                        <p className='desc-box mb-4'>
                          Featyring in-room spa services and a full-service spa,
                          this boutique hotel is located in the Chelsea
                          neighbouhood...
                        </p>
                        <div className='flex-parent-between'>
                          <div className='star-rating'>
                            <FontAwesomeIcon
                              icon={faStar}
                              className='font-16 mr-2'
                            />
                            4,32 (29)
                          </div>
                          <div className='pricebox'>
                            <h2 className='widget-title mb-0'>20 $</h2>
                            <div>per day</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className='pagination-wrapper '>
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default KikerooSearchResults;
