import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href: string;
    className?: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-primary-gradient hover:text-shadow hover:box-shadow",
            secondary: "",
            tertiary: "",
        },
        size: {
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8",
            large: "text-md px-6 h-12",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
})


export const Button = ({children, href, className, variant, size}: ButtonProps) => {
    return <a className={classNames(className, buttonClasses({variant, size}))} href={href}>{children}</a>
}