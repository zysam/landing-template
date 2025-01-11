import { About } from './about';
import { heroData } from './data';
import { Hero } from './hero';

export function Basic() {
  return (
    <div className="">
      <Hero content={heroData} />
      <About />
    </div>
  );
}
