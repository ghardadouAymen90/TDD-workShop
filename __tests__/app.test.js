const app = require('../app');

const { find, extinctionDate } = app;

describe('endangred Species', () => {

    describe('Find method', () => {
        it('Sould return found is specie is endangred', () => {
            expect(find('Panda')).toBe('found');
        })

        it('Sould return notFound is specie is not endangred', () => {
            expect(find('dog')).toBe('notFound');
        })


        describe('Should accept only string types', () => {
            const error = new Error('wrong type');
            it('sould not accept arrays', () => {
                expect(find(['Panda'])).toEqual(error)
            });

            it('sould not accept numbers', () => {
                expect(find(123)).toEqual(error)
            });
        })

        it('Sould compare chars even if they are in lower case', () => {
            expect(find('tiGer')).toBe('found');
        })

    })



    describe('extinctionDate method', () => {


        it('Should return date of the begginning of extinction of a species', () => {
            expect(extinctionDate('Panda')).toEqual(1900);
        });

        it('should return not found if species is not endangered', () => {
            expect(extinctionDate('Cat')).toBe(('notFound'))
        });

        it('Sould compare chars even if they are in lower case', () => {
            expect(extinctionDate('tiGer')).toEqual(1800);
        });
    })


})