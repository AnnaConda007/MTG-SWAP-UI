import clsx from 'clsx';

interface Props {
  text: string;
  bold?: boolean;
}
export const Text = ({ text, bold }: Props) => {
  return <span className={clsx('break-words tracking-tight', bold && 'font-bold')}>{text}</span>;
};
