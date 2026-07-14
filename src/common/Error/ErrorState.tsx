interface ErrorStateProps {
  title: string;
  description: string;
  onRetry: () => void;
}

function ErrorState({
  title,
  description,
  onRetry,
}: ErrorStateProps) {
  return (
    <div>
      <h2>{title}</h2>

      <p>{description}</p>

      <button onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorState;