import phoneNumberValidator from './phoneNumber'

describe('PhoneNumberValidator', () => {
    describe('on empty input', () => {
        it('should return undefined', () => {
            const result = phoneNumberValidator('')

            expect(result).toBeUndefined()
        })
    })

    describe('647-555-1212', () => {
        it('should return undefined', () => {
            const result = phoneNumberValidator('647-555-1212')

            expect(result).toBeUndefined()
        })
    })

    describe('647 555 1212', () => {
        it('should return undefined', () => {
            const result = phoneNumberValidator('647 555 1212')

            expect(result).toBeUndefined()
        })
    })

    describe('words', () => {
        it('should return an error', () => {
            const result = phoneNumberValidator('647 ABC 1212')

            expect(result).toEqual('should be a valid phone number')
        })
    })

    describe('less than 10 digits', () => {
        it('should return an error', () => {
            const result = phoneNumberValidator('647 323')

            expect(result).toEqual('should be a valid phone number')
        })
    })

    describe('more than 10 digits', () => {
        it('should return an error', () => {
            const result = phoneNumberValidator('647 323 28378')

            expect(result).toEqual('should be a valid phone number')
        })
    })
})
