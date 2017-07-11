"use strict";
import * as angular from "angular";
import blurModule from "./blur.module";

export const blur = blurModule.directive("orzBlur", blurDirective);

blurDirective.$inject = [];

function blurDirective() {
  const directive: angular.IDirective = {
    bindToController: true,
    controller: BlurController,
    controllerAs: "vm",
    link: linkFunc,
    replace: true,
    restrict: "EA",
    scope: {
      src: "@",
      stddeviation: "@"
    },
    transclude: "element",
    template: `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgBlur" style="max-width: 100%; max-height: 100%;">
                        <filter id="svgBlurFilter">
                            <feGaussianBlur id="svgGaussianBlur" in="SourceGraphic" stdDeviation="0" />
                        </filter>
                        <image class="background" xlink:href="{{vm.src}}" href="{{vm.src}}" x="0" y="0" class="blurred" filter="url(#svgBlurFilter)" />
            </svg>`
  };
  return directive;

  function linkFunc(
    scope: angular.IScope,
    element: JQuery,
    attrs: angular.IAttributes
  ) {
    (element.find("feGaussianBlur") as any)[0].setStdDeviation(
      scope.vm.stddeviation,
      scope.vm.stddeviation
    );
  }
}

class BlurController {
  private width: number = 0;
  private height: number = 0;

  constructor(
    $scope: angular.IScope,
    private $element: JQuery,
    $attrs: any,
    $transclude: any,
    private src: string,
    private stddeviation: number = 0
  ) {
    $scope.$watch("vm.src", (newValue, oldValue) => {
      if (!newValue) {
        return;
      }
      const image = new Image();
      image.src = this.src;
      image.onload = () => {
        this.width = image.width;
        this.height = image.height;
        this.updateViewBox();
      };
    });

    // $transclude((clone: any, scope: angular.IScope) => {
    //   clone.on("load", () => {
    //     this.width = clone[0].width;
    //     this.height = clone[0].height;
    //   });
    // });
  }

  private updateViewBox() {
    (this.$element as any)[0].setAttribute(
      "viewBox",
      [0, 0, this.width, this.height].join(" ")
    );
    (this.$element.find("image") as any)[0].setAttribute(
      "width",
      this.width
    );
    (this.$element.find("image") as any)[0].setAttribute(
      "height",
      this.height
    );
  }
}

BlurController.$inject = ["$scope", "$element", "$attrs", "$transclude"];
