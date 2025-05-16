import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Button } from '../Button';
import { Furniture, Union } from '../Svg';
import { FollowButton } from '@/components/@core/FollowButton';
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div className='slideContainer'>
      <Slider {...settings}>
        <div style={{ width: 'fit-content' }} className='flex flex-row border-[1px] border-solid shadow-[0_0_12px_#2871537a]'>
          <div className='flex h-[54px] w-fit items-center rounded-full border border-black bg-white p-3 text-sm font-medium shadow-[0_0_12px_#2871537a] hover:bg-gray-100'>
            <Furniture width={30} height={25} />
            <span className='category-title pl-1'> Furniture</span>
            <div>
              <FollowButton userId='123' initiallyFollowing={false} />
            </div>
          </div>
        </div>
        <div className='flex flex-row border-[1px] border-solid shadow-[0_0_12px_#2871537a]'>
          <div className='flex h-[54px] w-fit items-center rounded-full border border-black bg-white p-3 text-sm font-medium shadow-[0_0_12px_#2871537a] hover:bg-gray-100'>
            <Furniture width={30} height={25} />
            <span className='category-title pl-1'> Furniture</span>
            <div>
              <FollowButton userId='123' initiallyFollowing={false} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
