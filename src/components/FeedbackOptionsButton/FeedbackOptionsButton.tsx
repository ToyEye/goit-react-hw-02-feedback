import s from "./FeedbackOptionsButton.module.css";

type Props = {
  onLeaveFeedback: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  option: string;
};

const FeedbackOptionsButton = ({ onLeaveFeedback, option }: Props) => (
  <li>
    <button
      className={s.button}
      type="button"
      onClick={onLeaveFeedback}
      name={option}
    >
      {option}
    </button>
  </li>
);

export default FeedbackOptionsButton;
