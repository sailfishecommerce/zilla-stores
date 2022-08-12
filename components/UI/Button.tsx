import { PropsWithChildren } from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  className?: string;
  text: string;
  onClick?: () => void;
}

export default function Button({
  type,
  className,
  children,
  text,
  onClick,
}: PropsWithChildren<Props>) {
  const buttonType = type ? type : "button";
  const buttonClassName = className
    ? className
    : "btn btn-primary btn-sm d-block w-100 mb-2";
  return (
    <button className={buttonClassName} type={buttonType} onClick={onClick}>
      {children} <span>{text}</span>
    </button>
  );
}
