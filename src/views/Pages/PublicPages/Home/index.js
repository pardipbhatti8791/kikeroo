import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import KikerooSearchFilter from '../../../Components/SearchFilter';

const KikerooHome = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <Container>
        <section className='search-mainwrapper'>
          <h1 className='widget-title text-center'>Search </h1>
          <KikerooSearchFilter />
        </section>
      </Container>
      <section className='home-banner mb-5'>
        <Container>
          <h1 className='widget-title font-44'>
            Travel with your friends. It's so easy with kikeroo!
          </h1>
          <Button variant='warning' className='btn-xl py-4'>
            Start a group trip
          </Button>
        </Container>
      </section>
      <section className='home-commonWrapper'>
        <Container>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h1 className='widget-title mb-0'>Hotels</h1>
            <Button
              variant='default'
              className='text-white font-20 font-regular'
            >
              See all
            </Button>
          </div>
        </Container>
        <div className='common-innerWrapper'>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1'>Bolivia</h3>
              <h2 className='widget-title'>Tegal</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1'>Bolivia</h3>
              <h2 className='widget-title'>Tegal</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1'>Bolivia</h3>
              <h2 className='widget-title'>Tegal</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1'>Bolivia</h3>
              <h2 className='widget-title'>Tegal</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1'>Bolivia</h3>
              <h2 className='widget-title'>Tegal</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='home-commonWrapper'>
        <Container>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h1 className='widget-title mb-0'>Events</h1>
            <Button
              variant='default'
              className='text-white font-20 font-regular'
            >
              See all
            </Button>
          </div>
        </Container>
        <div className='common-innerWrapper'>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                concert, Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Hans Zimmer live</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                concert, Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Hans Zimmer live</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                concert, Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Hans Zimmer live</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                concert, Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Hans Zimmer live</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                concert, Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Hans Zimmer live</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-commonWrapper'>
        <Container>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h1 className='widget-title mb-0'>Activities</h1>
            <Button
              variant='default'
              className='text-white font-20 font-regular'
            >
              See all
            </Button>
          </div>
        </Container>
        <div className='common-innerWrapper'>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Parachute jump</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Parachute jump</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Parachute jump</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Parachute jump</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h3 className='widget-subtitle mb-1 font-regular font-12 text-whiteLight'>
                Tegal(Bolivia)
              </h3>
              <h2 className='widget-title font-16 '>Parachute jump</h2>
              <div className='post-date'>11 Feb 2021</div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-commonWrapper places-sec'>
        <Container>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h1 className='widget-title mb-0'>Places</h1>
            <Button
              variant='default'
              className='text-white font-20 font-regular'
            >
              See all
            </Button>
          </div>
        </Container>
        <div className='common-innerWrapper'>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h2 className='widget-title font-16 '>La Paz(Bolivia)</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h2 className='widget-title font-16 '>La Paz(Bolivia)</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h2 className='widget-title font-16 '>La Paz(Bolivia)</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h2 className='widget-title font-16 '>La Paz(Bolivia)</h2>
            </div>
          </div>
          <div className='commonSingle'>
            <Image src='../../assets/images/hotel-img1.jpg' rounded />
            <div className='contentBox'>
              <h2 className='widget-title font-16 '>La Paz(Bolivia)</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KikerooHome;
