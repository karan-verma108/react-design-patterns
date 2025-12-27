export default function Error({
  message,
  ctaText,
  onRetry,
}: {
  message: string;
  ctaText?: string;
  onRetry: () => void;
}) {
  return (
    <div>
      <p>{message}</p>
      {ctaText && <button onClick={onRetry}>{ctaText}</button>}
    </div>
  );
}
