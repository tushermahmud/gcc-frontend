type Props = {
    classes?: string;
    text: string;
}
const Typography = ({ classes, text}: Props) => {
  return (
    <span className={classes}>
      {text}
    </span>
  );
};

export default Typography;

