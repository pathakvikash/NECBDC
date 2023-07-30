import Slider from '../components/Slider';
import Works from '../components/Works';
export default function Home() {
  return (
    <div className='w-auto flex flex-col items-center justify-center'>
      <Slider />
      <Works />
    </div>
  );
}
