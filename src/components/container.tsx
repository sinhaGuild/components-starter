interface ContainerProps{
    children: React.ReactNode
    className?: string
}

export const Container = ({children, className}: ContainerProps) => {
    return <div className={`${"max-w-[120rem] mx-auto px-8"} ${className}`}>{children}</div>
}