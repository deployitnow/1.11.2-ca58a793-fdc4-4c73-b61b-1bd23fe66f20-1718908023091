import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryImageCtaSection
        title="We pass your Challenge Instantly."
        description="We will get your Prop Firm Challenge Funded, unlock up to 1,000,000$ Worth of Trading Capital"
        imageSrc="/static/images/product-sample.webp"
        withBackground
        withBackgroundGlow
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/pricing">Get Started</a>
        </Button>

        <Button size="xl" asChild variant="outlinePrimary">
          <a href="/discord">Join our Discord</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryImageCtaSection>

      <LandingProductFeature
        title="Prop Firm Challenge Funding"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'An authentic stepping stone',
                  description:
                    'Our platform acts as a bridge, connecting your potential with opportunities in the Prop Firm world.',
                },
                {
                  title: 'Achieve scale without the hurdles',
                  description:
                    'GetFunded funds your Prop Firm Challenge without the usual roadblocks. Start scaling from day one.',
                },
                {
                  title: 'Fast-track your funding dreams',
                  description:
                    'Say goodbye to the drawn-out process of traditional funding methods. We prioritize speed and precision.',
                },
              ]}
            />

            <Button asChild>
              <a href="/pricing">Get Started</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Swift Funding"
        descriptionComponent={
          <>
            <p>
              No more spending nights crunching numbers, filing applications,
              mounting paperwork or enduring long approval times. With
              GetFunded, swift and easy funding is more than a promise; it’s our
              operational mantra. Within a few clicks, you could be on your way
              to procuring funds reaching up to $1,000,000.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Capital you can count on',
                  description:
                    'We provide you with substantial capital of up to $1,000,000 to back your trading operations.',
                },
                {
                  title: 'Trade with conviction',
                  description:
                    'Our trust in your ability matches our provision of substantial capital. Trade confidently with GetFunded.',
                },
                {
                  title: 'Services you can trust',
                  description:
                    'With GetFunded, your ambitions are in safe hands. Our processes are transparent, leaving no room for doubt.',
                },
              ]}
            />

            <Button asChild variant="outlinePrimary">
              <a href="/discord">Join our Discord</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="Secure Platform"
        descriptionComponent={
          <>
            <p>
              At GetFunded, security is never an afterthought. GetFunded
              utilizes advanced encryption protocols to ensure the
              confidentiality and protection of your data. Because when you’re
              trading with high stakes, you need a platform you can
              wholeheartedly trust.
            </p>

            <Button asChild variant="outlinePrimary">
              <a href="/discord">Join our Discord</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="Capital Peaks"
        descriptionComponent={
          <>
            Navigate the financial market heights with GetFunded
            <Button asChild variant="outlinePrimary">
              <a href="/discord">Join our Discord</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="Limited Time Opportunity"
        description="Whether you’re a seasoned trader or a newbie venturing into the financial markets, GetFunded opens doors to possibilities you never knew existed. Now more than ever is the perfect time to step into this exciting venture! Hurry, because this exclusive offer won't last forever."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="What Our Successful Traders Say"
          description="Get a glimpse of the success journey of our numerous traders who embraced the unique benefits of GetFunded and turned their trading journey around."
          testimonialItems={[
            {
              name: 'John D.',
              text: 'When I joined GetFunded, they surpassed my expectations. Unlocking significant trading capital has never been so seamless.',
              handle: '@john_d.',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: 'Sandra J.',
              text: 'GetFunded comes as a breath of fresh air in the trading space. It delivered on its promises, empowering me to secure substantial trading capital.',
              handle: '@sandra_j.',
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: 'Mike W.',
              text: 'In the realm of Prop Firms, GetFunded stands unmatched. It provided me the edge to succeed in my trading journey.',
              handle: '@mike_w.',
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: 'Emma T.',
              text: "GetFunded is more than just a Prop Firm; it's a community that believes in your success just as much as you do.",
              handle: '@emma_t.',
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: 'James P.',
              text: 'The commitment GetFunded shows to their traders is extraordinary. They turned my trading capital dreams into a reality.',
              handle: '@james_p.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Lisa B.',
              text: 'I have, without a doubt, grown as a trader because of the guidance and unique benefits of GetFunded. It paved my way to trading success.',
              handle: '@lisa_b.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="GetFunded: Where Potential Meets Opportunity"
        description="Spearhead your trading journey with GetFunded. We aim to provide a sturdy foundation for your Prop Firm Challenge Funding dreams, offering up to $1,000,000 worth of trading capital."
        featureItems={[
          {
            title: 'An authentic stepping stone',
            description:
              'Our platform acts as a bridge, connecting your potential with opportunities in the Prop Firm world.',
            icon: <LayersIcon />,
          },
          {
            title: 'Achieve scale without the hurdles',
            description:
              'GetFunded funds your Prop Firm Challenge without the usual roadblocks. Start scaling from day one.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Fast-track your funding dreams',
            description:
              'Say goodbye to the drawn-out process of traditional funding methods. We prioritize speed and precision.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Capital you can count on',
            description:
              'We provide you with substantial capital of up to $1,000,000 to back your trading operations.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Trade with conviction',
            description:
              'Our trust in your ability matches our provision of substantial capital. Trade confidently with GetFunded.',
            icon: <ZapIcon />,
          },
          {
            title: 'Services you can trust',
            description:
              'With GetFunded, your ambitions are in safe hands. Our processes are transparent, leaving no room for doubt.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Our success is tied to yours',
            description:
              'We grow by helping you thrive. At GetFunded, your success is our reward.',
            icon: <ChromeIcon />,
          },
          {
            title: 'Hassle-free procedures',
            description:
              'No more dealing with complicated paperwork and time-consuming steps. GetFunded is simple, quick, and efficient.',
            icon: <FigmaIcon />,
          },
          {
            title: 'Your partner in the trading world',
            description:
              "We're not just a service provider. We're your partner, supporting your trading dreams every step of the way.",
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Sail the Sea of Success with GetFunded"
        description="Your pathway to a prosperous trading future starts here, where we transform dreams into reality. Offering a safety net for Prop Firm Challenges, GetFunded is your partner in navigating financial waters. Claim the capital and seize the opportunity you deserve."
        faqItems={[
          {
            question: "What is GetFunded's principal concept?",
            answer:
              "GetFunded is set to empower your trading journey, enabling you to pass your Prop Firm Challenge and risk-free access to trading capital up to $1,000,000. We're not simply a service; we're a catalyst for your financial growth.",
          },
          {
            question: 'How does GetFunded work?',
            answer:
              "With a clear-cut, user-friendly approach, we assess your Prop Firm Challenge. As you prove your calibre, we provide resources to help you build a profitable trading track record. Sooner than later, you'll be commanding substantial capital to trade.",
          },
          {
            question: 'Is GetFunded the right choice for me?',
            answer:
              "If you're ready to step into a prosperous trading future but held back due to lack of capital, GetFunded is your lifeline. We strive to make trading accessible to anyone with the right mindset, determination and skill set.",
          },
        ]}
        withBackground
      />
    </div>
  );
}
