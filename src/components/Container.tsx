import { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";

// ---- Polymorphic components
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Container;
