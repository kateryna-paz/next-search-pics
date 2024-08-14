type ErrorMessageProps = {
  children: string
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className='m-8 text-center text-xl text-red-300'>{children}</p>
}

export default ErrorMessage
