import React from 'react';
import { Icon } from '@iconify/react';

const ChatBar = () => {
  
  return (
    <div className="chat__sidebar ">
      <h2 className='font-20'>Neclea</h2>
      <hr className='border-t-2 border-gray-300 my-4' />
      <div className='flex flex-col justify-between space-y-80'>
  <div className="chat__users">
    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
      <Icon icon="bxs:coin-stack" width="24" height="24" rotate={2} />
      <p className='mb-2'>myPictures</p>
    </div>

    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
      <Icon icon="mingcute:flower-3-line" width="24" height="24" rotate={2} />
      <p className='mb-4'>Sample Projects</p>
    </div>

    <hr className='border-t-2 border-gray-300 my-4' />

    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
      <Icon icon="fluent:apps-24-filled" width="24" height="24" rotate={2} />
      <p className='mb-2'>Apps</p>
    </div>

    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
      <Icon icon="solar:playback-speed-bold" width="24" height="24" rotate={2} />
      <p className=''>Intro to Necle</p>
    </div>
  </div>

  <div className='chat__users '>
    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
    <Icon icon="material-symbols:contact-support-outline" width="24" height="24" />
      <p className=''>Help and Support</p>
    </div>
    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
    <Icon icon="material-symbols:feedback" width="24" height="24" />
      <p className=''>FeedBack</p>
    </div>
    <div className='flex flex-row justify-center space-x-2 mb-4 hover:text-orange transform hover:scale-110'>
        <Icon icon="iconoir:sidebar-collapse" width="24" height="24" />
        <p className=''>Collapse</p>
      </div>
  </div>
</div>

      

      
    </div>
  );
};

export default ChatBar;
