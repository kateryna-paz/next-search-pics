type ErrorMessageProps = {
  children: string
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className='text-center text-lg text-red-500'>{children}</p>
}

export default ErrorMessage
