import CheckPropTypes from 'check-prop-types';

export const  findByTestAttr = (component,attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component,expectedPorops) => {
    const propsErr = CheckPropTypes(component.propTypes,expectedPorops,'props',component.name);
    return propsErr;
}