import s from "./FeedbackOptionList.module.css";
import FeedbackOptionsButton from "../FeedbackOptionsButton/FeedbackOptionsButton";

type Props = {
  options: string[];
  onLeaveFeedback: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

const FeedbackOptionList = ({ options, onLeaveFeedback }: Props) => {
  return (
    <ul className={s.feedbacklist}>
      {options.map((option) => {
        return (
          <FeedbackOptionsButton
            key={option}
            onLeaveFeedback={onLeaveFeedback}
            option={option}
          />
        );
      })}
    </ul>
  );
};

export default FeedbackOptionList;
