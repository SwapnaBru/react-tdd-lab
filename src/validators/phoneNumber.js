export default ((value) => {
    return typeof value === 'string' && (value.length === 0 || (value.match(/^[\d \-]+$/) && value.replace(/\D/g, '').length === 10)) || typeof value === 'undefined' ? undefined : 'should be a valid phone number'
})
