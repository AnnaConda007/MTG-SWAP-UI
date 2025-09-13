interface Props {
  text: string;
}
export const Text = ({ text }: Props) => {
  return <span className="break-words  tracking-tight">{text}</span>;
};
