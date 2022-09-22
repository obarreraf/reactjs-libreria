"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_Text=_interopRequireDefault(require("./Text")),_jsxRuntime=require("react/jsx-runtime");describe("@component/Text",function(){it("Test Text",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Text["default"],{component:"h1",children:"Prueba de Text"})),b=a.getByRole,c=b("heading",{name:/Prueba de Text/i});//act
//assert
expect(c).toBeDefined()})});