import React from 'react';
import { Button } from '../../ui/Button'; // Cập nhật đúng đường dẫn nếu Button nằm ở nơi khác
import { ProjectGreen } from '../../ui/Svg';
import { cn } from '@/lib/utils'; // Nếu bạn có hàm cn để merge classNames (vd: dùng Tailwind merge libs)

type ActionButtonsProps = {
  onAddProject?: () => void;
  onDownload?: () => void;
  className?: string;
  classNameDownload?: string;
  classNameAddProject?: string;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDownload, onAddProject, className, classNameDownload, classNameAddProject }) => {
  return (
    <div className={cn('flex gap-4', className)}>
      <Button className={cn('flex-[1_1_0%] rounded-[3px] bg-[#eff5f3]', classNameDownload)} size='sm' onClick={onAddProject}>
        <ProjectGreen width={24} height={24} className='mx-auto' />
      </Button>
      <Button variant='greenLight' className={cn('h-full flex-[9_9_0%]', classNameAddProject)} rounded='sm' size='md' onClick={onDownload}>
        Download
      </Button>
    </div>
  );
};

export default ActionButtons;
// <div className={cn('grid grid-cols-[2fr_8fr] gap-4 flex-col', className)}>
//     <Button className='w-full rounded-[3px] bg-[#eff5f3]' size='none' onClick={onAddProject}>
//       <ProjectGreen width={24} height={24} className='mx-auto' />
//     </Button>
//     <Button variant='greenLight' className='w-full' rounded='sm' onClick={onDownload}>
//       Download
//     </Button>
//   </div>
