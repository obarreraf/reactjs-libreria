"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_ContainerFlex=_interopRequireDefault(require("./ContainerFlex")),_jsxRuntime=require("react/jsx-runtime");describe("@components/ContainerFlex",function(){it("mensaje",function(){// arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_ContainerFlex["default"],{bgcolor:"red",justifyContent:"center",role:"banner"})),b=a.getByRole,c=b("banner");// act 
// assert
expect(c).toBeDefined()})});