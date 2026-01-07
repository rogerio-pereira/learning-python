import {expect} from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

// Vuetify Support
import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify();
config.global.plugins = [vuetify];

config.global.stubs = {
  VIcon: true,
  VImg: true,
};