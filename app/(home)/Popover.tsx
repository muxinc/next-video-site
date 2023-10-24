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
        <PopoverLib.Content
          side="top"
          sideOffset={5}
          avoidCollisions
          collisionPadding={5}
          className="flex rounded-4 border border-gray-28 bg-black text-16"
        >
          <PopoverLib.Close aria-label="Close" className="px-10 py-5">
            &times;
          </PopoverLib.Close>
          <p className="py-5 pr-10">{text}</p>
          <PopoverLib.Arrow className="fill-gray-28" />
        </PopoverLib.Content>
      </PopoverLib.Portal>
    </PopoverLib.Root>
  );
};

export default Popover;
