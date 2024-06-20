import Header from '@/components/shared/Header';

export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center mb-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            About GetFunded
          </h1>

          <p className="mt-6 md:text-xl">We will get your Prop Firm Challenge Funded, unlock up to 1,000,000$ Worth of Trading Capital</p>

          <p className="mt-6 md:text-xl">It&apos;s about time you get funded.  According to insights from FTMO, only 10% of traders successfully navigate their challenge to complete the evaluation and verification.       However, with the introduction of HFT-enabled prop firms and our Non-HFT Prop Firm Passing service, GetFunded guarantees you the capital you deserve with a 100% pass rate.</p>
        </section>
      </div>
    </div>
  );
}
