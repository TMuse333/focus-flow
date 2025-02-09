import { useEffect, useState , useRef} from "react";
import { PopupWidget } from "react-calendly";

const BookingButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensures that we are on the client side
  }, []);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
    setIsClient(true);
  }, []);

  const rootRef = useRef<HTMLElement | null>(null);

  return (
    <>
    
        <PopupWidget
          url="https://calendly.com/saineymedia"
          rootElement={document.getElementById("root")!} // Handle client-side access
          text="Click Here To Schedule"
          textColor="#00bfff"
          
        />
 
    </>
  );
};

export default BookingButton;
