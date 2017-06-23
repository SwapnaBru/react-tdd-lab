export default ((value) => {
    return typeof value === 'undefined' || (typeof value === 'string' && (value.length === 0 || (value.match(/^[\d -]+$/) && value.replace(/\D/g, '').length === 10))) ? undefined : 'should be a valid phone number'
})
