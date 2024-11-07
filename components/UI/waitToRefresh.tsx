import React from 'react';

import { CircularProgress } from '@nextui-org/react';
import useRefOrWait from './base/useRefOrWait';
import { Button } from "@nextui-org/react";

interface MyComponentProps {
  waitForNewUpdate: number;
}

const WaitToRefresh: React.FC<MyComponentProps> = ({ waitForNewUpdate }) => {
  const { isWaiting, progress, handleRefresh } = useRefOrWait(waitForNewUpdate);

  return (
    isWaiting ? (
    //   <RefreshWaiting value={progress} />
      <CircularProgress
      aria-label='CircularProgress'
      size="lg"
      value={progress}
      showValueLabel={true}
      classNames={{
        indicator:'stroke-gray-mid',
        value:'text-gray-light'
      }}
    />
    ) : (
      <Button isIconOnly variant="faded" onClick={handleRefresh} radius="full" className='flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </Button>
    )
  );
}

export default WaitToRefresh;