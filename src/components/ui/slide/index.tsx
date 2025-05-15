import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Button } from '../Button';
import { Furniture, Union } from '../Svg';
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='slideContainer'>
      <Slider {...settings}>
        <div className='flex flex-row shadow-[0_0_12px_#2871537a]'>
          <div className='flex h-[54px] items-center rounded-full border border-black bg-white px-3 py-3 text-sm font-medium shadow-[0_0_12px_#2871537a] hover:bg-gray-100'>
            <div className='w-full'>
              <Furniture width={30} height={25} />
            </div>
            <span className='category-title pl-1'> Furniture</span>
            <div>
              <Button rounded='full' className='follow w-fit' variant='follow' icon={<Union />}>
                Follow
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
