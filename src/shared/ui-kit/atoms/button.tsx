import clsx from 'clsx';

interface Props {
  Icon: React.ElementType;
  handleButton?: () => void;
}

export const ButtonIconUi = ({ Icon, handleButton }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        'active:scale-90 transition-transform duration-100',
        'hover:text-primary-hover hover:scale-110',
      )}
      onClick={handleButton}
    >
      <Icon />
    </button>
  );
};
