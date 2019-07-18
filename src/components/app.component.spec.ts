import { LitElement } from 'lit-element';
import { BroncoIcon } from './app.component';
import './app.component';
import { emit } from 'cluster';

describe('bronco-icon', () => {
  let element: BroncoIcon;

  beforeEach(async () => {
    element = document.createElement('bronco-left-navbar') as BroncoIcon;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render bronco-icon', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('');
  });

});
