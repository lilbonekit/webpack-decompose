import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import kittyCat from '@/assets/cat.jpg';
import Icon from '@/assets/icon.svg';
// function toDo(a: number) {
// 	console.log(`TODO: ${a}`)
// }
export var App = function () {
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    var inc = function () { return setCounter(function (prev) { return ++prev; }); };
    var dec = function () { return setCounter(function (prev) { return --prev; }); };
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "Desktop platform" });
    }
    // let's check it separately
    // toDo('ts check')
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "Mobile platform" });
    }
    return (_jsxs("div", { className: classes.appContainer, children: [_jsx(Link, { to: '/about', children: "About" }), _jsx(Link, { to: '/shop', children: "Shop" }), _jsx("h1", { children: counter }), _jsxs("h2", { children: ["PLATFORM=", __PLATFORM__] }), _jsx("button", { className: classes.button, onClick: inc, children: "inc" }), _jsx("button", { className: classes.button, onClick: dec, children: "dec" }), _jsx("div", { children: kittyCat }), _jsx("img", { width: 100, height: 100, src: kittyCat, alt: "cat" }), _jsx(Outlet, {}), _jsx(Icon, { width: 200, height: 200 })] }));
};
