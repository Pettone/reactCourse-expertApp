import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing custom hook useFetchGifs', () => { 

    test('Must to show initial state', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Pokemon') );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Must to return an images array and loading in false', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Pokemon') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});