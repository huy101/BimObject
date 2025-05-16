import React, { useState } from 'react';
import { Button } from '@/components/ui/Button'; // điều chỉnh đúng path
import { Union } from '@/components/ui/Svg'; // SVG icon

export const FollowButton: React.FC<{
  userId?: string;
  initiallyFollowing?: boolean;
}> = ({ userId, initiallyFollowing = false }) => {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing);
  const [loading, setLoading] = useState(false);

  const toggleFollow = async () => {
    setLoading(true);
    try {
      // Gọi API hoặc xử lý state giả lập
      await new Promise((res) => setTimeout(res, 500)); // mô phỏng delay

      setIsFollowing((prev) => !prev);
    } catch (error) {
      console.error('Lỗi theo dõi:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleFollow}
      variant='follow'
      size='follow'
      rounded='full'
      disabled={loading}
      icon={!isFollowing ? <Union width={8} height={8} /> : undefined} // ẩn icon nếu đã follow
      iconPosition='left'
      className={`flex h-fit min-h-[1.25rem] text-center text-[12px] font-bold ${
        isFollowing ? 'bg-[#0c482f] text-white hover:bg-[#053521]' : 'bg-[#d5e5e0] text-[#0c482f] hover:bg-[#b0ccc2]'
      } `}
    >
      <span className='mr-0 text-[12px] font-bold'>{isFollowing ? 'Following' : 'Follow'}</span>
    </Button>
  );
};
