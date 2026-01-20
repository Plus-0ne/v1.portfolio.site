import ReactDOM from 'react-dom/client';

// export { render as onRenderClient }

export default function render(pageContext: any) {
  const { Page } = pageContext;

  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <Page />
  );
}
