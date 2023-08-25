import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };
  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <a onClick={handleSignupShow} href="#">
        Signup
      </a>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
      </nav>
    </header>
  );
}
