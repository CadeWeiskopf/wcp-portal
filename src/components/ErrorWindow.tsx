interface ErrorWindowProps {
  message: string;
}

export default function ErrorWindow(props: ErrorWindowProps) {
  return (
    <div className="errorwindow-container">
      <div className="errorwindow">{props.message}</div>
    </div>
  );
}
