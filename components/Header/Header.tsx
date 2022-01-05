import { ComponentPropsWithoutRef, forwardRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<"h1">;

const Header = forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        {...props}
        className={clsx(
          "text-3xl",
          "text-black",
          "font-bold",
          "antialiased",
          "font-sans",
          className,
        )}
        ref={ref}
      />
    );
  },
);

Header.displayName = "Header";

export default Header;
