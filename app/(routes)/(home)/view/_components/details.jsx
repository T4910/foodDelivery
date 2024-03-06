const details = ({content}) => {
  return (
    <div className="space-y-2">
        <h1 className="block font-semibold text-xl">Details</h1>
        <p className="text-muted-foreground">{content}</p>
    </div>
  )
}

export default details