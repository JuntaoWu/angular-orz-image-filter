'use strict';
import * as angular from "angular";
import blurModule from "./blur.module";

export var blur = blurModule.directive("orzBlur", blurDirective);

blurDirective.$inject = [];

function blurDirective() {

    let directive: angular.IDirective = {
        bindToController: true,
        controller: BlurController,
        controllerAs: 'vm',
        link: link,
        restrict: 'EA',
        scope: {
            'stddeviation': '@',
            'src': '@'
        },
        replace: true,
        template: `
            <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgBlur">
                        <filter id="svgBlurFilter">
                            <feGaussianBlur id="svgGaussianBlur" in="SourceGraphic" stdDeviation="0" />
                        </filter>
                        <image class="background" xlink:href="{{vm.src}}" href="{{vm.src}}" x="0" y="0" height="256" width="256" class="blurred" filter="url(#svgBlurFilter)" />
            </svg>`
    };
    return directive;

    function link(scope, element, attrs) {
        console.log("BlurDirective link");
        element.find("feGaussianBlur")[0].setStdDeviation(scope.vm.stddeviation, scope.vm.stddeviation)
    }

}

class BlurController {
    constructor() {
        console.log("BlurController constructor");
    }
}

