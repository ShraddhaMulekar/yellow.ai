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
    <div className="error-state">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">{title}</h2>
      <p className="error-description">{description}</p>
      <button className="btn btn-retry" onClick={onRetry}>
        🔄 Try Again
      </button>
    </div>
  );
}

export default ErrorState;