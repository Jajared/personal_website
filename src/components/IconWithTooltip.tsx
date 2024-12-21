const IconWithTooltip = ({ Icon, text }: { Icon: React.FC; text: string }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-8 h-8 group">
        <Icon />
        <div className="absolute mt-[72px] opacity-0 text-xs font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">{text}</div>
      </div>
    </div>
  );
};

export default IconWithTooltip;
