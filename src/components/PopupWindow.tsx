interface PopupWindowProps {
  message: string;
}

export default function PopupWindow(props: PopupWindowProps) {
  return (
    <div className="popupwindow-container">
      <div className="popupwindow">{props.message}</div>
    </div>
  );
}
