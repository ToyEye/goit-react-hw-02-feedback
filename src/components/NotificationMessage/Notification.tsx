import s from "./Notification.module.css";

type Props = {
  message: string;
};

const Notification = ({ message }: Props) => (
  <h2 className={s.notification}>{message}</h2>
);

export default Notification;
