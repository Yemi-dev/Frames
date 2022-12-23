import React from 'react';

import { AboutInfoContainer, PrimaryContainer, SecondaryContainer } from './index.styled';

const AboutInfo = (): JSX.Element => {
  return (
    <AboutInfoContainer>
      <PrimaryContainer>
        <h2>Dasola Awoye is a multidisciplinary creative designer based in Lagos Nigeria,</h2>
        <p>
          who discovered his passion for creativity, design, and artistry during his adolescence.{' '}
        </p>
      </PrimaryContainer>
      <SecondaryContainer>
        <p>
          His creative disciplines include, but are not limited to, creative and conscious visual
          design, brand identity design, interaction / product design, fashion design, and interior
          decoration.
        </p>
      </SecondaryContainer>
      <PrimaryContainer>
        <p>
          His skill set includes a thorough understanding and application of design principles, as
          well as creative knowledge, technical, artistic, logical, business, communication, and
          analytical abilities... all of which enable him to design his way out of a problem.
        </p>
      </PrimaryContainer>
      <SecondaryContainer>
        <p>
          His workstyle is based on Design Thinking, which entails both a strategic and hands-on
          user-focused approach across all disciplines, in which he employs research, creativity,
          inside-out craftsmanship, and collaborative thinking to create the best solution for any
          problem.
        </p>
      </SecondaryContainer>
      <PrimaryContainer>
        <p>
          He is the CEO and main creative director and designer for FRAMES BY DASOLA and KARV
          Clothing Brand, and he currently works as a lead Visual and Product design as well as
          creative director in several startups such as Budgety, Spikk, Gloed, and HostOut.
        </p>
      </PrimaryContainer>
      <SecondaryContainer>
        <p>
          He also works as a Senior Product Designer for Globus Bank (Nigeria), a leading commercial
          bank and financial services provider headquartered in Victoria Island, Lagos.
        </p>
      </SecondaryContainer>
      <PrimaryContainer>
        <p>
          Since 2018, he has been mentoring young designers and creatives across Nigeria, helping
          them find their purpose in design and creativity while also imparting in-depth and
          timeless design knowledge to help them find their feet and grow in the design community.
        </p>
      </PrimaryContainer>
    </AboutInfoContainer>
  );
};

export default AboutInfo;
