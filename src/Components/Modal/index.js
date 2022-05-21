import { Component } from "react";
import ReactDOM from "react-dom";



const modalRoot = typeof document !== 'undefined' ? document.getElementById('portal') : null;

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  
  componetWillUnmount() {
    modalRoot.removeChild(this.el)
  }



render() {
  const { children } = this.props;

  if(this.el) {
    return ReactDOM.createPortal(
     children ,
      this.el
    )
  } else {
    return null
  }
  
}
}