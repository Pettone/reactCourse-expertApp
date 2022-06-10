import { getGifs } from "../../helpers/getGifs";

describe('Tests with getGifs', () => { 
    
    test('Must to retrieve ten elements', async() => { 

        const gifs = await getGifs('Guardians Of The Galaxy');
        expect(gifs.length).toBe(10);
    });

    test('Must to retrive an empty array', async() => { 

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});