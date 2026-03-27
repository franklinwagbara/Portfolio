import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            color: "#4db5ff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h2>Something went wrong.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: "1rem",
              padding: "0.8em 1.5em",
              border: "1px solid #4db5ff",
              borderRadius: "5px",
              background: "transparent",
              color: "#4db5ff",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
