export function FormError({errors}) {
  return(
    <ul>
        {errors.length > 0 ? (
          errors.map((err) => (
            <li key={err.msg}>
              <p>{err.msg}</p>
            </li>
          ))
        ) : (
          <p>No errors yet</p>
        )}
      </ul>
  )
}