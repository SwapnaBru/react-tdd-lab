export default ((value) => {
    return value && !(value.length === 0 || (value.match(/^[\d \-]+$/) && value.replace(/\D/g, '').length === 10)) ? 'should be a valid phone number': undefined
})
