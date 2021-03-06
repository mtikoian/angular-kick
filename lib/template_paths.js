'use strict';

// This file defines the paths to templates used by generators

const ROOT = __dirname + '/../templates';

const ANGULAR_PATHS = {
  directive: '/directive.js',
  directiveWithTemplate: '/directive_with_template.js',
  directiveTemplate: '/directive_template.html',
  filter: '/filter.js',
  partial: '/partial.html',
  partialWithController: '/partial_with_controller.html',
  controller: '/controller.js',
  service: '/service.js',
  model: '/model.js',
  stateView: '/state/state.html',
  stateController: '/state/state_controller.js',
  stateRoute: '/state/route.js',
  stateStylesheet: '/state/stylesheet.scss',
  nestedRoute: '/state/nested_route.js',
  testMock: '/test/mock.js',
  testControllerUnit: '/test/controller_unit_spec.js',
  testDirectiveUnit: '/test/directive_unit_spec.js',
  testFilterUnit: '/test/filter_unit_spec.js',
  testServiceUnit: '/test/service_unit_spec.js',
  testModelUnit: '/test/model_unit_spec.js',
  config: '/config.js'
};

// TODO: Kick will have an option to support other frameworks later
module.exports = class TemplatePaths {

  static angular(template) {
    return `${ROOT}/angular${ANGULAR_PATHS[template]}`;
  }

};
