import clsx from 'clsx';

interface Props {
  Icon: React.ElementType;
  iconColor?: string;
  handleButton?: () => void;
}

export const ButtonIconUi = ({ Icon, handleButton, iconColor }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        'active:scale-90 transition-transform duration-100',
        ' hover:scale-110, cursor-pointer',
        iconColor,
      )}
      onClick={handleButton}
    >
      <Icon />
    </button>
  );
};
