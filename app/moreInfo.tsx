export const MoreInfo = () => {
  return (
    <>
      <section className="relative py-14 lg:py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="./about_us.jpg"
                alt="About Us tailwind page"
                className="rounded-lg max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="w-full data">
                <h2 className="relative text-4xl font-extrabold tracking-tight text-black text-green-500 lg:text-5xl mb-9 max-lg:text-center">
                  Abous Us
                </h2>
                <p className="max-w-2xl mx-auto text-lg font-normal leading-8 text-gray-400 max-lg:text-center">
                  We&apos;re a passionate team united by the belief that bridging the
                  gap between imagination and reality is essential. We pour our
                  hearts and souls into every AR experience we create, fueled by
                  late nights and a shared vision of revolutionizing furniture
                  shopping. This isn&apos;t just a company; it&apos;s a movement to
                  empower people to design dream spaces with confidence. We want
                  to hear your stories and transform your furniture shopping
                  experience. Together, one AR visualization at a time, we&apos;ll
                  weave a future where furniture seamlessly complements your
                  unique style and brings your dream space to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 lg:py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="flex items-center lg:pr-24">
              <div className="w-full data">
                <img
                  src="./winning.jpg"
                  alt="Winning"
                  className="block mx-auto lg:hidden mb-9"
                />
                <h2 className="text-4xl font-extrabold tracking-tight text-black text-green-500 font-manrope lg:text-5xl mb-9 max-lg:text-center">
                  Top 10 at QOMPETE 2024!
                </h2>
                <p className="max-w-2xl mx-auto text-lg font-normal leading-8 text-gray-400 max-lg:text-center">
                  Making it to the Top 10 at the QOMPETE National Student
                  StartUp Challenge wasn&apos;t just an honor, it was a validation.
                  It meant that our crazy idea resonated, that the frustration
                  of furniture shopping wasn&apos;t just ours. It ignited a fire in
                  us - a fire to empower people to design dream spaces with
                  confidence, to eliminate the guesswork and replace it with
                  stunning AR visualizations.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="./winning.jpg"
                alt="About Us tailwind page"
                className="hidden lg:block border-1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
