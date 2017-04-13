# 2.0.1

- Made sure the default state for setupStateAwareInterval is "active"

# 2.0.0

- Added umd/browser-global build.
- Simplified the API a bit. It has now settled on:

  appIs(state);
  getState(state);
  setupEventListener(type, callback, [options]);
  setupStateAwareInterval(callback, timeout, [options]);

# 1.0.3

Same signature for all listeners.
Added triggerOnSetup option to all listeners.

# 1.0.2

Added docs

# 1.0.1

THe first release that actually works...

# 1.0.0

Initial release
