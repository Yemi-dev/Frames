import Sample from 'pages/Sample';
import ErrorBoundary from 'ui/components/ErrorBoundary';

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Sample title="SampleComponent" description="This is the sample component description" />
    </ErrorBoundary>
  );
};

export default App;
