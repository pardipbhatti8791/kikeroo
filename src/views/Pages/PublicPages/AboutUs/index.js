import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <section className='page-banner '>
        <Container>
          <h1 className='widget-title'>
            Your Travelbuddy <br />
            Discover a new way to make globe trotting work for you.
          </h1>
        </Container>
      </section>
      <section className='aboutpage-content font-20'>
        <Container>
          <p>
            Traveling doesn’t have to be a one-time experience. Imagine you
            could use your past trips to pay for future bookings, to upgrade
            your next trip or to add some exclusive experiences to your upcoming
            vacation. The more you'd travel, the easier it would become in the
            long run. If you like the sound of that, you're in for a treat!
            Anything you need whilst traveling you'll find it on Kikeroo. Become
            a member of our community!
          </p>
          <p className='mb-5'>
            We are building a massive platform where you can book hotels,
            flights and unique experiences all over the world. From 5-star
            deluxe hotels to simple hostels, all rates will be competitive or
            even cheaper than you would expect on booking.com and others. All
            you need to do is to pick your next dream destination and off you
            go.
          </p>
          <div className='font-12'>Next Level Loyalty</div>
          <h1 className='widget-title'>Next Level Loyalty</h1>
          <p>
            Traveling can be expensive, so why not make your trips work for you?
            We believe that every experience should reward you with an
            opportunity. There's no place for borders and limitations. So we
            decided to lower the burdon on first-class traveling and empower the
            explorers and adventurers out there.
          </p>
          <div className='font-12'>Next Level Traveling</div>
          <h1 className='widget-title'>Discover unique experiences</h1>
          <p>
            No trip is defined by the hotel room that you're staying in.
            Traveling is about collecting memories, souveniers and experience
            new things. That's why we want to create a platform that allows you
            to book an entire adventure - from transportation and accomodation
            right down to exploration and complementation.
          </p>
          <div className='font-12'>Next Level Supporty</div>
          <h1 className='widget-title'>You'll never travel alone</h1>
          <p>
            Our platform is designed to be your omni-present travel companion.
            Your 4am buddy that reminds you to get out and watch the sun rise.
            Your hiking pal that tells you to put on an oxygen mask. Your
            night-owl assistant that call an Uber when you leave the club. Well
            ... maybe not all those things. We'll try.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
