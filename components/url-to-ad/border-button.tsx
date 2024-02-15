import classNames from 'classnames';
import React from 'react';

export default function BorderButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames(
        'border border-[#D9D9D9] px-[15px] py-[6.4px] h-[38.8px] flex justify-center items-center rounded-[2px] gap-[10px]',
        className,
      )}>
      {children}
    </div>
  );
}
