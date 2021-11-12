const Buttons = ({ text, buttonAction, classes }) => (
    <button className={`btn__${classes}`} onClick={buttonAction}>{text}</button>
  )

export default Buttons;
