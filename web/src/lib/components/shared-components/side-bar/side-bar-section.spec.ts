import SideBarSection from '$lib/components/shared-components/side-bar/side-bar-section.svelte';
import { render, screen } from '@testing-library/svelte';

vi.mock('$lib/stores/mobile-device.svelte', () => ({
  mobileDevice: {
    isFullSidebar: false,
  },
}));

describe('SideBarSection component', () => {
  it('should render hidden and inert', () => {
    // when
    render(SideBarSection);
    const parent = screen.getByTestId('sidebar-parent');

    // then
    expect(parent.inert).toBeTruthy();
    expect(parent.tabIndex).toBe(-1);
    expect(parent.classList).toContain('sidebar:w-[16rem]'); // sets the initial width for page load
    expect(parent.childElementCount).toBe(1);
  });
});
