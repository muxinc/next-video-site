'use client';

import React from 'react';

import * as PopoverLib from '@radix-ui/react-popover';

type Props = {
  text: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};
const Popover = ({ text, label, children, className }: Props) => {
  return (
    <PopoverLib.Root>
      <PopoverLib.Trigger aria-label={label} className={className}>
        {children}
      </PopoverLib.Trigger>
      <PopoverLib.Portal>
        <PopoverLib.Content side="right" sideOffset={5} className="flex rounded-4 border border-gray-28 bg-black">
          <p className="py-5 pl-10 text-18">{text}</p>
          <PopoverLib.Close aria-label="Close" className="py-5 px-10">
            &times;
          </PopoverLib.Close>
          <PopoverLib.Arrow className="fill-gray-28" />
        </PopoverLib.Content>
      </PopoverLib.Portal>
    </PopoverLib.Root>
  );
};

export default Popover;
