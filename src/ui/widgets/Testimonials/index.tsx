import React from 'react';
import { Typography } from 'ui/atoms/Typography';
import TestimonialCard from 'ui/components/TestimonialCard';
import { ScrollArrowRegular } from 'ui/svgs/ScrollArrowRegular';

import { TestimonialCards, TestimonialHeader, TestimonialsContainer } from './index.styled';

const Testimonials = (): JSX.Element => {
  return (
    <TestimonialsContainer>
      <TestimonialHeader>
        <Typography variant="h2">Testimonials</Typography>
        <ScrollArrowRegular></ScrollArrowRegular>
      </TestimonialHeader>
      <TestimonialCards>
        <TestimonialCard
          text=" “The art from Dasola is really nice, It makes my clients interior look luxury and fancy,
        they tell me their guests always say how much they like it.”"
          src="/uploads/Male.png"
          name="Isiak Kolawole"
          title="CEO Eazy Interiors"
        />
        <TestimonialCard
          text=" “As a developer, I was initially nervous about spending
on a piece of art, but it came out great, my family members love the look it brings to my space.”"
          src="/uploads/Male (1).png"
          name="Wonuola Ahmed"
          title="Software Developer"
        />
        <TestimonialCard
          text=" “We got a lot of compliments on the artwork we bought from Dasola, it added colour and texture to our living room, and made it look fresh.”"
          src="/uploads/Male (2).png"
          name="Alhaja Kudirat Folake"
          title="Building materials merchant"
        />
        <TestimonialCard
          text=" “The art from Dasola is really nice, It makes my clients interior look luxury and fancy,
        they tell me their guests always say how much they like it.”"
          src="/uploads/Male (3).png"
          name="Engr. S.O Arigbabu"
          title="Civil Engineer"
        />
      </TestimonialCards>
    </TestimonialsContainer>
  );
};

export default Testimonials;
