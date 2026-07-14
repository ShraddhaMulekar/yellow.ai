interface EmptyStateProps {
  title: string;
  description: string;
}

function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;