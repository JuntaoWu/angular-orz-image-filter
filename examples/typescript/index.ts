
import * as angular from "angular";
import { blur } from "angular-orz-image-filter";

angular.module('mainApp', [blur.name]);

angular.bootstrap(document.body, ['mainApp'], {
    strictDi: true
});