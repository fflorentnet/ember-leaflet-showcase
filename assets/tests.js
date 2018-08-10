'use strict';

define('ember-leaflet-showcase/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/leaflet-draw.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/leaflet-draw.js should pass ESLint\n\n9:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n10:5 - \'L\' is not defined. (no-undef)\n11:5 - \'L\' is not defined. (no-undef)\n12:5 - \'L\' is not defined. (no-undef)\n13:5 - \'L\' is not defined. (no-undef)\n14:5 - \'L\' is not defined. (no-undef)\n15:5 - \'L\' is not defined. (no-undef)\n16:5 - \'L\' is not defined. (no-undef)\n17:5 - \'L\' is not defined. (no-undef)\n18:5 - \'L\' is not defined. (no-undef)\n19:5 - \'L\' is not defined. (no-undef)\n20:5 - \'L\' is not defined. (no-undef)\n21:5 - \'L\' is not defined. (no-undef)\n22:5 - \'L\' is not defined. (no-undef)\n25:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n33:22 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n35:19 - Use import { camelize } from \'@ember/string\'; instead of using Ember.String.camelize (ember/new-module-imports)\n37:33 - Use import { classify } from \'@ember/string\'; instead of using Ember.String.classify (ember/new-module-imports)\n70:24 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n75:24 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n97:19 - Use import { camelize } from \'@ember/string\'; instead of using Ember.String.camelize (ember/new-module-imports)\n98:33 - Use import { classify } from \'@ember/string\'; instead of using Ember.String.classify (ember/new-module-imports)\n102:9 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n107:13 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('helpers/readable-polygon.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/readable-polygon.js should pass ESLint\n\n15:28 - \'rectangle\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('ember-leaflet-showcase/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('ember-leaflet-showcase/tests/test-helper', ['ember-leaflet-showcase/app', 'ember-leaflet-showcase/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-leaflet-showcase/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('ember-leaflet-showcase/config/environment', [], function() {
  var prefix = 'ember-leaflet-showcase';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-leaflet-showcase/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
