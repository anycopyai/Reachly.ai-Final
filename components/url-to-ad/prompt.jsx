import React from 'react';
import SelectInput from './labeled-input';
import { useForm } from 'react-hook-form';
import DemoSelect from './demo-select';

export default function Prompt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    // resolver: yupResolver(addAlgorithmsSchema),
  });
  return (
    <div className="h-full   min-w-[600px] ">
      <div className="text-[#0033FF] border-b-2 border-[#0033FF] w-fit py-2 ">
        <p>Prompt</p>
      </div>
      <form action="" className="mt-6 space-y-6 h-full pr-8 overflow-y-scroll">
        <div className="flex justify-between gap-4">
          <DemoSelect label={'Language'} defaultValue={'English'} />
          <DemoSelect label={'Project'} defaultValue={'Console'} />
        </div>
        <div className="flex justify-between">
          <span>View and modify your projects here </span>
          <span className="text-[#0033FF]">My Projects</span>
        </div>
        <div className="space-y-2 relative w-full opacity-25">
          <div>Website/Landing page URL</div>
          <textarea className="w-full " defaultValue={'Anycopy.com'} rows={2} />
          <span className="absolute bottom-2 right-2 ">0/75</span>
        </div>
        <div className="w-full h-10 flex justify-center items-center rounded-[2px] border-[#D9D9D9] bg-[#F5F5F5] text-black/25">
          Generate Copy
        </div>
        <div className="h-[1500px]"></div>
      </form>
    </div>
  );
}
