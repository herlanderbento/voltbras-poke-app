import "./spinner.scss";

export function LazyImageSpinner() {
  return (
    <div className="loader-container-small" data-testid="loading-spinner">
      <div className="loader"></div>
    </div>
  );
}
