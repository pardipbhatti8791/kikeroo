import React from 'react';
import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import KikerooDatePicker from '../../../Components/SearchFilter/DatePicker';
import KikerooGuestFilter from '../../../Components/SearchFilter/GuestFilter';

const BookingGift = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <section className='page-commonPadding'>
        <Container>
          <div className='max-width78 mx-auto bookingPageWrapper'>
            <h2 className='widget-title text-center '>Booking for gift</h2>
            <p className='font-20'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p className='font-20'>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            </p>
            <div className='singleProduct-Wrapper font-14'>
              <div className='product-galleryBox'>
                <div className='imgSingle'>
                  <Image src='../../assets/images/hotel-img1.jpg' />
                </div>
                <div className='imgSingle'>
                  <Image src='../../assets/images/hotel-img1.jpg' />
                </div>
                <div className='imgSingle'>
                  <Image src='../../assets/images/hotel-img1.jpg' />
                </div>
                <div className='imgSingle'>
                  <Image src='../../assets/images/hotel-img1.jpg' />
                </div>
                <div className='imgSingle'>
                  <Image src='../../assets/images/hotel-img1.jpg' />
                </div>
              </div>
              <Row>
                <Col md='7'>
                  <div className='productdetail-box'>
                    <p className='mb-5'>
                      1 guest · 1 bedroom · 1 bed · 1 bathroom
                    </p>
                    <p className='mb-0'>
                      Sharing is caring – make some friends in this room.
                    </p>
                    <ul className='listicon'>
                      <li> Book one bed (or more) in this shared room</li>
                      <li>2 bunks – 4 beds</li>
                      <li>Private bathroom</li>
                      <li>
                        All bunks include a light feature, personal shelf and
                        under-bed lockers
                      </li>
                      <li>Pillow, duvet, linen all supplied</li>
                      <li>Towels available at reception for a small fee</li>
                    </ul>
                  </div>
                </Col>
                <Col md='5'>
                  <div className='filterWrapper d-flex'>
                    <div className='filterSingle'>
                      <KikerooDatePicker />
                    </div>
                    <div className='filterSingle'>
                      <KikerooGuestFilter />
                    </div>
                  </div>

                  <div className='flex-parent-between'>
                    <Button variant='primary' className='px-4 py-3' size='lg'>
                      Personal Booking
                    </Button>
                    <Button variant='primary' className='px-4 py-3' size='lg'>
                      Booking as a gift
                    </Button>
                  </div>
                  <div className='flex-parent-between font-16 mt-4'>
                    <div className='price'>$19 x 7 days</div>
                    <div className='total-price'>Total: $133</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BookingGift;
