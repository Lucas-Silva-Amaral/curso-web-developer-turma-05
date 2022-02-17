const EmployeeListItem = (props) => {
  const { name, role, children } = props
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      {children}
    </div>
  )
}

export default EmployeeListItem
