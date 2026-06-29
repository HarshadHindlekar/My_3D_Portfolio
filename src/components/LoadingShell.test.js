import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import { SectionLoader } from './LoadingShell';

global.IS_REACT_ACT_ENVIRONMENT = true;

describe('SectionLoader', () => {
  it('renders themed status copy and section class for suspense fallbacks', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<SectionLoader section="projects" label="Loading launchpad" />);
    });

    const loader = container.querySelector('.mission-section-loader--projects');
    expect(loader).not.toBeNull();
    expect(loader.getAttribute('aria-live')).toBe('polite');
    expect(container.textContent).toContain('Loading launchpad');

    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
  });
});
