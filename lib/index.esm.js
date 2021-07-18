import React from 'react';
import styled, { withTheme } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var handleColor = function (color, theme) {
    switch (color) {
        // ~~ Primary Colors
        case 'primary':
            return theme.colors.primary.color;
        case 'primary-light':
            return theme.colors.primary.light;
        case 'primary-dark':
            return theme.colors.primary.dark;
        case 'primary-text':
            return theme.colors.primary.text;
        // ~~ Secondary Colors
        case 'secondary':
            return theme.colors.secondary.color;
        case 'secondary-light':
            return theme.colors.secondary.light;
        case 'secondary-dark':
            return theme.colors.secondary.dark;
        case 'secondary-text':
            return theme.colors.secondary.text;
        // ~~ Success Colors
        case 'success':
            return theme.colors.success.color;
        case 'success-light':
            return theme.colors.success.light;
        case 'success-dark':
            return theme.colors.success.dark;
        case 'success-text':
            return theme.colors.success.text;
        // ~~ Info Colors
        case 'info':
            return theme.colors.info.color;
        case 'info-light':
            return theme.colors.info.light;
        case 'info-dark':
            return theme.colors.info.dark;
        case 'info-text':
            return theme.colors.info.text;
        // ~~ Warning Colors
        case 'warning':
            return theme.colors.warning.color;
        case 'warning-light':
            return theme.colors.warning.light;
        case 'warning-dark':
            return theme.colors.warning.dark;
        case 'warning-text':
            return theme.colors.warning.text;
        // ~~ Error Colors
        case 'error':
            return theme.colors.error.color;
        case 'error-light':
            return theme.colors.error.light;
        case 'error-dark':
            return theme.colors.error.dark;
        case 'error-text':
            return theme.colors.error.text;
        // ~~ Black Colors
        case 'black':
            return theme.colors.black.color;
        case 'black-light':
            return theme.colors.black.color;
        case 'black-dark':
            return theme.colors.black.color;
        case 'black-text':
            return theme.colors.black.text;
        // ~~ White Colors
        case 'white':
            return theme.colors.white.color;
        case 'white-light':
            return theme.colors.white.color;
        case 'white-dark':
            return theme.colors.white.color;
        case 'white-text':
            return theme.colors.white.text;
        // ~~ Background Colors
        case 'background':
            return theme.colors.background.color;
        case 'background-light':
            return theme.colors.background.color;
        case 'background-dark':
            return theme.colors.background.color;
        case 'background-text':
            return theme.colors.background.color;
        case undefined:
            return theme.colors.black.color;
        default:
            return color;
    }
};

var generateTheme = function (config) {
    return {
        name: config.name,
        font: {
            families: {
                primary: config.font[0]
            },
            weight: {
                light: '300',
                normal: '500',
                bold: '700'
            }
        },
        // ~~ Colors
        colors: {
            white: {
                name: config.colors.white.name ? config.colors.white.name : 'White',
                text: config.colors.white.text ? config.colors.white.text : config.colors.white.color,
                color: config.colors.white.color
            },
            black: {
                name: config.colors.black.name ? config.colors.black.name : 'Black',
                text: config.colors.black.text ? config.colors.black.text : config.colors.black.color,
                color: config.colors.black.color
            },
            background: {
                name: config.colors.background.name ? config.colors.background.name : 'Background',
                color: config.colors.background.color
            },
            primary: {
                name: config.colors.primary.name ? config.colors.primary.name : 'Primary',
                text: config.colors.primary.text ? config.colors.primary.text : config.colors.primary.color,
                color: config.colors.primary.color,
                light: config.colors.primary.light ? config.colors.primary.light : config.colors.primary.color,
                dark: config.colors.primary.dark ? config.colors.primary.dark : config.colors.primary.color
            },
            secondary: {
                name: config.colors.primary.name ? config.colors.primary.name : 'Secondary',
                text: config.colors.secondary.text ? config.colors.secondary.text : config.colors.secondary.color,
                color: config.colors.secondary.color,
                light: config.colors.secondary.light ? config.colors.secondary.light : config.colors.secondary.color,
                dark: config.colors.secondary.dark ? config.colors.secondary.dark : config.colors.secondary.color
            },
            success: {
                name: config.colors.success.name ? config.colors.success.name : 'Success',
                text: config.colors.success.text ? config.colors.success.text : config.colors.success.color,
                color: config.colors.success.color,
                light: config.colors.success.light ? config.colors.success.light : config.colors.success.color,
                dark: config.colors.success.dark ? config.colors.success.dark : config.colors.success.color
            },
            info: {
                name: config.colors.success.name ? config.colors.info.name : 'Info',
                text: config.colors.info.text ? config.colors.info.text : config.colors.info.color,
                color: config.colors.info.color,
                light: config.colors.info.light ? config.colors.info.light : config.colors.info.color,
                dark: config.colors.info.dark ? config.colors.info.dark : config.colors.info.color
            },
            error: {
                name: config.colors.error.name ? config.colors.error.name : 'Error',
                text: config.colors.error.text ? config.colors.error.text : config.colors.error.color,
                color: config.colors.error.color,
                light: config.colors.error.light ? config.colors.error.light : config.colors.error.color,
                dark: config.colors.error.dark ? config.colors.error.dark : config.colors.error.color
            },
            warning: {
                name: config.colors.warning.name ? config.colors.warning.name : 'Warning',
                text: config.colors.warning.text ? config.colors.warning.text : config.colors.warning.color,
                color: config.colors.warning.color,
                light: config.colors.warning.light ? config.colors.warning.light : config.colors.warning.color,
                dark: config.colors.warning.dark ? config.colors.warning.dark : config.colors.warning.color
            }
        },
        layout: {
            padding: {
                xs: '6px',
                s: '12px',
                m: '26px',
                l: '42px',
                xl: '84px'
            },
            margin: {
                xs: '6px',
                s: '12px',
                m: '26px',
                l: '42px',
                xl: '84px'
            },
            breakpoints: {
                Desktop: '1920px',
                Laptop: '1366px',
                tablet: '850px',
                mobile: '450px'
            }
        },
        animations: {
            transitions: {
                slow: '0.8s',
                standard: '0.5s',
                fast: '0.3s',
            }
        }
    };
};

var utils = {
    handleColor: handleColor,
    generateTheme: generateTheme
};

var PrimaryHeading = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 60px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"], ["\n  font-size: 60px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"])), function (props) { return props.theme.font.weight.bold; }, function (props) { return props.theme.font.families.primary; }, function (props) { return props.color; });
var SecondaryHeading = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 42px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"], ["\n  font-size: 42px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"])), function (props) { return props.theme.font.weight.bold; }, function (props) { return props.theme.font.families.primary; }, function (props) { return props.color; });
var TertiaryHeading = styled.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 27px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"], ["\n  font-size: 27px;\n  font-weight: ", ";\n  font-family: ", ";\n  text-transform: capitalize;\n  color: ", ";\n"])), function (props) { return props.theme.font.weight.light; }, function (props) { return props.theme.font.families.primary; }, function (props) { return props.color; });
var templateObject_1, templateObject_2, templateObject_3;

var styles = {
    PrimaryHeading: PrimaryHeading,
    SecondaryHeading: SecondaryHeading,
    TertiaryHeading: TertiaryHeading
};

var Heading = function (props) {
    var _a = props.color, color = _a === void 0 ? 'black' : _a, _b = props.hierarchy, hierarchy = _b === void 0 ? 'primary' : _b, _c = props.text, text = _c === void 0 ? 'primary heading text' : _c, theme = props.theme;
    var handleHierarchy = function (hierarchy, args, text) {
        switch (hierarchy) {
            case 'secondary':
                return (React.createElement(styles.SecondaryHeading, __assign({}, args), text));
            case 'tertiary':
                return (React.createElement(styles.TertiaryHeading, __assign({}, args), text));
            default:
                return (React.createElement(styles.PrimaryHeading, __assign({}, args), text));
        }
    };
    return handleHierarchy(hierarchy, {
        color: utils.handleColor(color, theme)
    }, text);
};
var Heading$1 = withTheme(Heading);

var lib = {
    Heading: Heading$1
};

export default lib;
//# sourceMappingURL=index.esm.js.map
