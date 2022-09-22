"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_Button=_interopRequireDefault(require("./Button")),_jsxRuntime=require("react/jsx-runtime");describe("@components/Button",function(){it("Given a normal component call it should render component",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button"})),b=a.getByRole,c=b("button");//act
//assert
expect(c).toBeDefined()})});