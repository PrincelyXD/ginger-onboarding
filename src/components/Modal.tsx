import CheckMark from "../assets/ui/CheckMark";
import PillButton from "./PillButton";

const Modal = () => {
  return (
    <section className="fixed left-0 top-0 z-[999] flex h-full w-screen items-center justify-center bg-[#000000b0]">
      <div className="flex h-[500px] w-[850px] overflow-hidden rounded-[30px] bg-white">
        <div className="flex h-full w-1/2 flex-col items-center justify-center px-[50px] text-center">
          <CheckMark />

          <h2 className="font-merchant text-[40px] leading-[1.7]">
            Account Created!
          </h2>
          <p className="mb-[30px]  text-[14px] font-light text-[#262626]">
            Ginger allows you to buy a variety of quality products from a large
            network of vetted beauty and fashion merchants and manufacturers.
          </p>

          <PillButton
            name="Continue"
            disabled={false}
            paddingY="py-[15px]"
            href="."
          />
        </div>

        <div className="bg-modal-bg h-full w-1/2 bg-cover bg-center"></div>
      </div>
    </section>
  );
};

export default Modal;
