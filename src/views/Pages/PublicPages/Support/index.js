import React from 'react';
import { Container } from 'react-bootstrap';

const Support = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <section className='page-commonPadding font-20'>
        <Container>
          <h1 className='widget-title mb-5'>FAQ</h1>
          <h2 className='widget-subtitle font-20 mb-2'>
            How can I become a member?
          </h2>
          <p className='mb-5'>
            Simply go through the registering process and select the membership
            which better fits your needs.
          </p>

          <h2 className='widget-subtitle font-20 mb-2'>Hotel booking?</h2>
          <p className='mb-5'>
            After you book, a confirmation email will be sent to you with your
            itinerary number and trip details.
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>
            Change or cancel my booking?
          </h2>
          <p className='mb-5'>
            The change or cancellation of your booking largely depends on the
            policy of the hotel you’ve selected
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>Payment method?</h2>
          <p className='mb-5'>
            You can pay for your hotel booking online using a debit or credit
            card or PayPal.
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>
            When will I receive my cashback?
          </h2>
          <p className='mb-5'>
            The amount will be deposited as soon as you do a booking and it can
            be visualized on your profile.
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>
            How can I use my previous cashback?
          </h2>
          <p className='mb-5'>
            You can use in any moment your cashback by simply paying your full
            booking or part of it with the amount you on your profile wallet.
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>Help Center</h2>
          <p className='mb-5'>
            If you have any issues or questions contact us on Facebook,
            Instagram, Linkedin or send us an email at info@kikeroo.com
          </p>
          <h2 className='widget-subtitle font-20 mb-2'>Support</h2>
          <p className='mb-5'>
            Do you need help for a booking you’ve made or you have trouble with
            bookings you want to make? Send us an email at info@kikeroo.com
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Support;
