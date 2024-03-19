type TProps = {
    children: React.ReactNode;
}

export default function ContentContainer({ children }: TProps) {
  return (
    <div className="container mx-auto px-4 py-24">
        {children}
    </div>
  )
}
