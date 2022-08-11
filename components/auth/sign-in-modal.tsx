import { Overlay, SignIn } from "@/components";

interface SignInModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function SignInModal(props: SignInModalProps) {
  const { open, setOpen } = props;

  return (
    <Overlay open={open} setOpen={setOpen}>
      <SignIn />
    </Overlay>
  );
}
